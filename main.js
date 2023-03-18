"use strict";
(self["webpackChunknexttodo"] = self["webpackChunknexttodo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* border: 1px red solid; */\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 15fr;\n}\n\n.header {\n  display: grid;\n  grid-template-columns: 5fr 1fr 20fr;\n  border: 1px solid red;\n}\n\nh1 {\n  color: red;\n}\n\n.container {\n  height: auto;\n  display: grid;\n  grid-template-columns: 250px auto;\n}\n\n.inbox, .add-task, .add-project {\n  cursor: pointer;\n}\n\n.sidebar {\n  margin: 5px 2%;\n  display: grid;\n  grid-template-rows: 11.5rem auto 50px;\n}\n\nh2 {\n  margin-bottom: 0.5rem;\n}\n\n.views-container, .projects-container {\n  padding: 0.5rem;\n}\n\n.view, .project {\n  /* margin-left: 0.5rem; */\n  cursor: pointer;\n  font-size: 1.2rem;\n  margin: 0.2rem 0;\n}\n\n.projects-header {\n  display: grid;\n  grid-template-columns: 6fr 1fr;\n}\n\n.project-name {\n  max-width: 200px; /* Set the maximum width of the div */\n  overflow: hidden; /* Hide the content that exceeds the max-width */\n  white-space: nowrap; /* Prevent the text from wrapping to a new line */\n  text-overflow: ellipsis; /* Add ellipsis (...) to indicate the text is truncated */\n}\n\n.active-view, .active-project {\n  color: blue;\n  background-color: aliceblue;\n}\n\n.project-mini-menu {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 3px;\n}\n\n.project-mini-menu-button {\n  cursor: pointer;\n  font-size: 1rem;\n}\n\n.settings-container {\n  margin: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.main {\n  border-left: 1px red solid;\n}\n\n.tasks-list-header, .task {\n  margin: 0 1%;\n}\n\n.tasks-list-header {\n  height: 2.5rem;\n  font-size: 1.2rem;\n  padding-top: 0.5rem;\n  border-bottom: 3px darkgray solid;\n}\n\n.not-show-project-name {\n  display: grid;\n  grid-template-columns: 1fr 1fr 15fr 3fr 3fr;\n}\n\n.show-project-name {\n  display: grid;\n  grid-template-columns: 1fr 1fr 15fr 3fr 3fr 3fr;\n}\n\n.task {\n  height: 2rem;\n  padding-top: 0.5rem;\n  margin: 0 1%;\n  border-bottom: 1px solid darkgray;\n  font-size: 1rem;\n}\n\n\n.task-list {\n  /* border: 1px blue solid; */\n  max-height: 50vh;\n}\n\n.active-task {\n  background-color: lightgray;\n}\n\n.new-task {\n  margin: 0 1%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 15fr 3fr 3fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.new-task-with-project {\n  margin: 0 1%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 15fr 3fr 3fr 3fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.editing-task {\n  background-color: lightgray;\n  margin: 0 1%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 15fr 3fr 3fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.limited-text {\n  max-width: 95%; /* Set the maximum width of the div */\n  overflow: hidden; /* Hide the content that exceeds the max-width */\n  white-space: nowrap; /* Prevent the text from wrapping to a new line */\n  text-overflow: ellipsis; /* Add ellipsis (...) to indicate the text is truncated */\n}\n\n.focus-btn {\n  margin: 3px 15px 3px 0;\n  cursor: pointer;\n}\n\n.done {\n  text-decoration: line-through\n}\n\n.date-passed {\n  color: red;\n}\n\n.delete-btn {\n  margin: 3px 30%;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,2BAA2B;EAC3B,sHAAsH;AACxH;;AAEA;EACE,aAAa;EACb,aAAa;EACb,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,qBAAqB;AACvB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,qCAAqC;AACvC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,gBAAgB,EAAE,qCAAqC;EACvD,gBAAgB,EAAE,gDAAgD;EAClE,mBAAmB,EAAE,iDAAiD;EACtE,uBAAuB,EAAE,yDAAyD;AACpF;;AAEA;EACE,WAAW;EACX,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,mBAAmB;EACnB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,+CAA+C;AACjD;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,iCAAiC;EACjC,eAAe;AACjB;;;AAGA;EACE,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,2CAA2C;EAC3C,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,+CAA+C;EAC/C,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,2CAA2C;EAC3C,2BAA2B;AAC7B;;AAEA;EACE,cAAc,EAAE,qCAAqC;EACrD,gBAAgB,EAAE,gDAAgD;EAClE,mBAAmB,EAAE,iDAAiD;EACtE,uBAAuB,EAAE,yDAAyD;AACpF;;AAEA;EACE,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE;AACF;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;AACjB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* border: 1px red solid; */\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 15fr;\n}\n\n.header {\n  display: grid;\n  grid-template-columns: 5fr 1fr 20fr;\n  border: 1px solid red;\n}\n\nh1 {\n  color: red;\n}\n\n.container {\n  height: auto;\n  display: grid;\n  grid-template-columns: 250px auto;\n}\n\n.inbox, .add-task, .add-project {\n  cursor: pointer;\n}\n\n.sidebar {\n  margin: 5px 2%;\n  display: grid;\n  grid-template-rows: 11.5rem auto 50px;\n}\n\nh2 {\n  margin-bottom: 0.5rem;\n}\n\n.views-container, .projects-container {\n  padding: 0.5rem;\n}\n\n.view, .project {\n  /* margin-left: 0.5rem; */\n  cursor: pointer;\n  font-size: 1.2rem;\n  margin: 0.2rem 0;\n}\n\n.projects-header {\n  display: grid;\n  grid-template-columns: 6fr 1fr;\n}\n\n.project-name {\n  max-width: 200px; /* Set the maximum width of the div */\n  overflow: hidden; /* Hide the content that exceeds the max-width */\n  white-space: nowrap; /* Prevent the text from wrapping to a new line */\n  text-overflow: ellipsis; /* Add ellipsis (...) to indicate the text is truncated */\n}\n\n.active-view, .active-project {\n  color: blue;\n  background-color: aliceblue;\n}\n\n.project-mini-menu {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 3px;\n}\n\n.project-mini-menu-button {\n  cursor: pointer;\n  font-size: 1rem;\n}\n\n.settings-container {\n  margin: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.main {\n  border-left: 1px red solid;\n}\n\n.tasks-list-header, .task {\n  margin: 0 1%;\n}\n\n.tasks-list-header {\n  height: 2.5rem;\n  font-size: 1.2rem;\n  padding-top: 0.5rem;\n  border-bottom: 3px darkgray solid;\n}\n\n.not-show-project-name {\n  display: grid;\n  grid-template-columns: 1fr 1fr 15fr 3fr 3fr;\n}\n\n.show-project-name {\n  display: grid;\n  grid-template-columns: 1fr 1fr 15fr 3fr 3fr 3fr;\n}\n\n.task {\n  height: 2rem;\n  padding-top: 0.5rem;\n  margin: 0 1%;\n  border-bottom: 1px solid darkgray;\n  font-size: 1rem;\n}\n\n\n.task-list {\n  /* border: 1px blue solid; */\n  max-height: 50vh;\n}\n\n.active-task {\n  background-color: lightgray;\n}\n\n.new-task {\n  margin: 0 1%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 15fr 3fr 3fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.new-task-with-project {\n  margin: 0 1%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 15fr 3fr 3fr 3fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.editing-task {\n  background-color: lightgray;\n  margin: 0 1%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 15fr 3fr 3fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.limited-text {\n  max-width: 95%; /* Set the maximum width of the div */\n  overflow: hidden; /* Hide the content that exceeds the max-width */\n  white-space: nowrap; /* Prevent the text from wrapping to a new line */\n  text-overflow: ellipsis; /* Add ellipsis (...) to indicate the text is truncated */\n}\n\n.focus-btn {\n  margin: 3px 15px 3px 0;\n  cursor: pointer;\n}\n\n.done {\n  text-decoration: line-through\n}\n\n.date-passed {\n  color: red;\n}\n\n.delete-btn {\n  margin: 3px 30%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElement)
/* harmony export */ });
function createElement(type, classArray, attrObj, text) {
  const element = document.createElement(type);
  element.classList.add(...classArray);

  for (const attr in attrObj) {
    element.setAttribute(attr, attrObj[attr]);
  }

  element.textContent = text;

  return element;
}


/***/ }),

/***/ "./src/dom-projects.js":
/*!*****************************!*\
  !*** ./src/dom-projects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewProject": () => (/* binding */ addNewProject),
/* harmony export */   "projectListClickHandler": () => (/* binding */ projectListClickHandler),
/* harmony export */   "updateProjectsDisplay": () => (/* binding */ updateProjectsDisplay)
/* harmony export */ });
/* harmony import */ var _globalConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalConstants */ "./src/globalConstants.js");
/* harmony import */ var _dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-updateTasksDisplay */ "./src/dom-updateTasksDisplay.js");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* eslint-disable no-plusplus */
/* eslint-disable comma-dangle */
// import "@mdi/font/css/materialdesignicons.min.css";




// Add mini menu to the active project
const addProjectMiniMenu = (projects, projectEl, index) => {
  // Only add the mini menu for projects other than Inbox
  if (index > 0) {
    // Make project and project name visually unclickable
    projectEl.style.cursor = 'default';
    projectEl.children[0].style.cursor = 'default';

    // Create mini menu
    const menuEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('div', ['project-mini-menu'], {}, '');
    projectEl.appendChild(menuEl);
    // Add a place holder in the front so the buttons are on the right
    menuEl.appendChild((0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('div', [], {}, ''));

    // The up arrow
    // Do not show for the project just below Inbox
    if (index > 1) {
      menuEl.appendChild(
        (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])(
          'button',
          ['project-mini-menu-button', 'mdi', 'mdi-chevron-up'],
          { 'data-btn': 'up' },
          ''
        )
      );
    } else {
      menuEl.appendChild((0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('div', [], {}, ''));
    }

    // Show the down arrow
    // Do not show for the project at the botton of the list
    if (index < projects.projects.length - 1) {
      menuEl.appendChild(
        (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])(
          'button',
          ['project-mini-menu-button', 'mdi', 'mdi-chevron-down'],
          { 'data-btn': 'down' },
          ''
        )
      );
    } else {
      menuEl.appendChild((0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('div', [], {}, ''));
    }

    // The edit button
    menuEl.appendChild(
      (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])(
        'button',
        ['project-mini-menu-button', 'mdi', 'mdi-square-edit-outline'],
        { 'data-btn': 'edit' },
        ''
      )
    );

    // The delete button
    menuEl.appendChild(
      (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])(
        'button',
        ['project-mini-menu-button', 'mdi', 'mdi-close'],
        { 'data-btn': 'remove', style: 'color: red' },
        ''
      )
    );
  }
};

// Redraws the projects list
const updateProjectsDisplay = (projects, activeProject) => {
  // Empty the content of the projects list
  _globalConstants__WEBPACK_IMPORTED_MODULE_0__.projectListEl.innerHTML = '';

  // Go through each project in projects[]
  projects.projects.forEach((project, index) => {
    const projectEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('div', ['project'], { 'data-id': index });
    const projectNameEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])(
      'div',
      ['project-name', 'mdi', 'mdi-list-box-outline'],
      { style: 'cursor: pointer' },
      ` ${project.name}`
    );
    projectEl.appendChild(projectNameEl);

    // Highlight the active project, and add a mini menu
    if (project === activeProject) {
      projectEl.classList.add('active-project');
      addProjectMiniMenu(projects, projectEl, index);
    }

    _globalConstants__WEBPACK_IMPORTED_MODULE_0__.projectListEl.appendChild(projectEl);
  });
};

// Add a new project
const addNewProject = (projects) => {
  const inputEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('input', ['project-title'], {});
  _globalConstants__WEBPACK_IMPORTED_MODULE_0__.projectListEl.appendChild(inputEl);
  inputEl.focus();

  return new Promise((resolve, reject) => {
    // Get a name for the new project
    inputEl.addEventListener('change', () => {
      projects.addProject(inputEl.value);
      resolve();
    });
    // Listen for the Esc key
    inputEl.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        _globalConstants__WEBPACK_IMPORTED_MODULE_0__.projectListEl.removeChild(inputEl);
        reject();
      }
    });
  });
};

// Event listener for Projects List
const projectListClickHandler = (e, projects) => {
  let index;
  let activeProject;
  const parentEl = e.target.parentElement;
  const grandParentEl = parentEl.parentElement;

  return new Promise((resolve) => {
    // Clicked on a project-name
    if (e.target.classList.contains('project-name')) {
      // id is stored as a string, need to convert it to a number to avoid issues
      index = Number(parentEl.dataset.id);
      activeProject = projects.projects[index];
      (0,_dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_1__.updateTasksDisplay)(projects, activeProject.tasks);
      resolve(index);
    }
    // Clicked on a mini menu
    else if (parentEl.classList.contains('project-mini-menu')) {
      // id is stored as a string, need to convert it to a number to avoid issues
      index = Number(grandParentEl.dataset.id);

      switch (e.target.dataset.btn) {
        case 'up':
          projects.swapProject(index, index - 1);
          index--;
          resolve(index);
          break;
        case 'down':
          projects.swapProject(index, index + 1);
          index++;
          resolve(index);
          break;
        case 'edit':
          // Replace project name with an input
          const inputEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('input', [], {
            type: 'text',
            value: grandParentEl.children[0].textContent,
            'data-id': index,
          });
          grandParentEl.replaceChild(inputEl, grandParentEl.children[0]);
          inputEl.focus();

          // Listen for change in the input
          inputEl.addEventListener('change', () => {
            const projectNameEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])(
              'div',
              'project-name',
              { style: 'cursor: pointer', 'data-id': index },
              inputEl.value
            );
            // Rename project in the database
            activeProject = projects.projects[index];
            projects.renameProject(activeProject, inputEl.value);
            // Replace the input with the new project name
            grandParentEl.replaceChild(projectNameEl, inputEl);
            resolve(index);
          });
          break;
        case 'remove':
          projects.removeProject(index);
          index = 0;
          resolve(index);
          break;

        default:
          break;
      }
    }
  });
};




/***/ }),

/***/ "./src/dom-tasks.js":
/*!**************************!*\
  !*** ./src/dom-tasks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewTask": () => (/* binding */ addNewTask),
/* harmony export */   "taskListClickHandler": () => (/* binding */ taskListClickHandler)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _globalConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalConstants */ "./src/globalConstants.js");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */




// import updateTasksDisplay from './updateTasksDisplay';

// Function for adding a new task
const addNewTask = (projects, activeProject, showView) => {
  // Create a new task element
  const taskEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('div', ['new-task'], {}, '');

  // Create each part of a task elelment
  const focusEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('input', [], { type: 'checkbox' }, '');
  taskEl.appendChild(focusEl);

  const statusEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('select', [], {}, '');
  const statusToDoEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('option', [], {}, 'To do');
  statusEl.appendChild(statusToDoEl);
  const statusDoingEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('option', [], {}, 'Doing');
  statusEl.appendChild(statusDoingEl);
  const statusWaitEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('option', [], {}, 'Waiting');
  statusEl.appendChild(statusWaitEl);
  const statusDoneEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('option', [], {}, 'Done');
  statusEl.appendChild(statusDoneEl);
  taskEl.appendChild(statusEl);

  const descriptionEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('input', [], {}, '');
  taskEl.appendChild(descriptionEl);

  const projectEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('select', [], {}, '');
  if (showView) {
    projects.projects.forEach((project) => {
      const optionEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('option', [], {}, project.name);
      projectEl.appendChild(optionEl);
    });
    taskEl.appendChild(projectEl);
    taskEl.classList.remove('new-task');
    taskEl.classList.add('new-task-with-project');
  }

  const startDateEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('input', [], { type: 'date' }, '');
  taskEl.appendChild(startDateEl);

  const dueDateEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('input', [], { type: 'date' }, '');
  taskEl.appendChild(dueDateEl);

  // Make placeholders so the Submit button shows up at the end
  const skip = showView ? 5 : 4;
  for (let i = 0; i < skip; i++) {
    taskEl.appendChild((0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('div', [], {}, ''));
  }
  const submitBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('button', [], {}, 'Submit');
  taskEl.appendChild(submitBtn);

  // Attach the new task element to the tasksList element
  _globalConstants__WEBPACK_IMPORTED_MODULE_1__.tasksListEl.appendChild(taskEl);

  // Focus on the description so the user can start entering text
  descriptionEl.focus();

  // Wait for the submit button to be clicked on
  return new Promise((resolve) => {
    submitBtn.addEventListener('click', () => {
      const projectIndex =
        showView === true
          ? projectEl.selectedIndex
          : projects.projects.indexOf(activeProject);
      const task = (0,_task__WEBPACK_IMPORTED_MODULE_3__["default"])(
        focusEl.checked,
        // status is from array ['Todo', 'Doing', 'Wait', 'Done']
        _globalConstants__WEBPACK_IMPORTED_MODULE_1__.status[statusEl.selectedIndex],
        descriptionEl.value,
        startDateEl.value,
        dueDateEl.value,
        projectIndex,
        projects.projects[projectIndex].tasks.length
      );

      projects.addTaskToProject(task, projects.projects[projectIndex]);
      resolve();
    });
  });
};

// Handles a valid click on the tasks list
const taskListClickHandler = (row, col, projects, activeProject, showView) => {
  console.log(
    '🚀 ~ file: dom-tasks.js:156 ~ taskListClickHandler ~ row, col:',
    row,
    col
  );
  const taskEl = _globalConstants__WEBPACK_IMPORTED_MODULE_1__.tasksListEl.children[row];
  console.log(
    '🚀 ~ file: dom-tasks.js:75 ~ taskListClickHandler ~ global.tasksListEl:',
    _globalConstants__WEBPACK_IMPORTED_MODULE_1__.tasksListEl
  );
  console.log(
    '🚀 ~ file: dom-tasks.js:157 ~ taskListClickHandler ~ taskEl:',
    taskEl
  );
  taskEl.classList.add('active-task');
  const projectIndex = taskEl.getAttribute('data-projectIndex');
  console.log(
    '🚀 ~ file: dom-tasks.js:82 ~ taskListClickHandler ~ projectIndex:',
    projectIndex
  );
  const taskIndex = taskEl.getAttribute('data-taskIndex');
  console.log(
    '🚀 ~ file: dom-tasks.js:84 ~ taskListClickHandler ~ taskIndex:',
    taskIndex
  );

  return new Promise((resolve) => {
    const editingTaskEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('div', ['editing-task'], {}, '');

    // Focus button
    const focusIcon = taskEl.children[0].innerText;
    const focusEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('button', ['focus-btn'], {}, focusIcon);
    editingTaskEl.appendChild(focusEl);

    // Status pull down
    const selectedIndex = Number(taskEl.children[1].dataset.statusindex);

    const statusEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('select', [], {}, '');
    // Option is from the statusIcons dictionary
    const statusToDoEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('option', [], {}, 'To do');
    if (selectedIndex === 0) statusToDoEl.selected = true;
    statusEl.appendChild(statusToDoEl);
    const statusDoingEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('option', [], {}, 'Doing');
    if (selectedIndex === 1) statusDoingEl.selected = true;
    statusEl.appendChild(statusDoingEl);
    const statusWaitEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('option', [], {}, 'Waiting');
    if (selectedIndex === 2) statusWaitEl.selected = true;
    statusEl.appendChild(statusWaitEl);
    const statusDoneEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('option', [], {}, 'Done');
    if (selectedIndex === 3) statusDoneEl.selected = true;
    statusEl.appendChild(statusDoneEl);
    editingTaskEl.appendChild(statusEl);

    // Description text input
    const description = taskEl.children[2].innerText;
    const descriptionEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])(
      'input',
      [],
      { value: description },
      ''
    );
    editingTaskEl.appendChild(descriptionEl);

    // StartDate date input
    const startDateEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])(
      'input',
      [],
      { type: 'date', value: taskEl.children[3].innerText },
      ''
    );
    editingTaskEl.appendChild(startDateEl);

    // Update dueDate
    const dueDateEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])(
      'input',
      [],
      { type: 'date', value: taskEl.children[4].innerText },
      ''
    );
    editingTaskEl.appendChild(dueDateEl);

    // Place holders
    for (let i = 0; i < 3; i++) {
      // make sure not to use 'div' here due to a check in screenController()
      const element = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('p', [], {}, '');
      editingTaskEl.appendChild(element);
    }

    // The project list drop down
    const projectDropDownEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('select', [], {}, '');
    // Options are project names
    projects.projects.forEach((project) => {
      const projectEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('option', [], {}, project.name);
      if (project === activeProject) {
        projectEl.selected = true;
      }
      projectDropDownEl.appendChild(projectEl);
    });

    editingTaskEl.appendChild(projectDropDownEl);

    // The delete button
    const delBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('button', ['delete-btn'], {}, '❌');
    editingTaskEl.appendChild(delBtn);

    const thisProject =
      showView === true ? projects.projects[projectIndex] : activeProject;
    console.log(
      '🚀 ~ file: dom-tasks.js:225 ~ returnnewPromise ~ thisProject:',
      thisProject
    );
    _globalConstants__WEBPACK_IMPORTED_MODULE_1__.tasksListEl.replaceChild(editingTaskEl, taskEl);

    focusEl.addEventListener('click', () => {
      // Toggle focus icon
      let value = focusIcon === '🫥' ? true : false;
      projects.updateTaskinProject(thisProject, taskIndex, 'focus', value);
      resolve();
    });

    statusEl.addEventListener('change', () => {
      projects.updateTaskinProject(
        thisProject,
        taskIndex,
        'status',
        _globalConstants__WEBPACK_IMPORTED_MODULE_1__.status[statusEl.selectedIndex]
      );
      resolve();
    });

    descriptionEl.addEventListener('change', () => {
      projects.updateTaskinProject(
        thisProject,
        taskIndex,
        'description',
        descriptionEl.value
      );
      resolve();
    });

    // Use blur instead of change, so it does not fire too soon
    startDateEl.addEventListener('blur', () => {
      projects.updateTaskinProject(
        thisProject,
        taskIndex,
        'startDate',
        startDateEl.value
      );
      resolve();
    });

    // Use blur instead of change, so it does not fire too soon
    dueDateEl.addEventListener('blur', () => {
      projects.updateTaskinProject(
        thisProject,
        taskIndex,
        'dueDate',
        dueDateEl.value
      );
      resolve();
    });

    projectDropDownEl.addEventListener('change', () => {
      console.log(
        '🚀 ~ file: dom-tasks.js:290 ~ projectDropDownEl.addEventListener ~ projectDropDownEl.selectedIndex:',
        projectDropDownEl.selectedIndex
      );
      projects.updateTaskinProject(
        thisProject,
        taskIndex,
        'projectIndex',
        projectDropDownEl.selectedIndex
      );

      projects.moveTasktoProject(
        thisProject,
        taskIndex,
        projects.projects[projectDropDownEl.selectedIndex]
      );
      resolve();
    });

    delBtn.addEventListener('click', () => {
      // Call from projects to delete the task
      // so that the local storage is updated after the deletion
      projects.deleteTaskFromProject(taskIndex, thisProject);
      resolve();
    });
  });
};




/***/ }),

/***/ "./src/dom-updateTasksDisplay.js":
/*!***************************************!*\
  !*** ./src/dom-updateTasksDisplay.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateTasksDisplay": () => (/* binding */ updateTasksDisplay),
/* harmony export */   "updateTasksListHeader": () => (/* binding */ updateTasksListHeader)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* harmony import */ var _globalConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalConstants */ "./src/globalConstants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* eslint-disable no-plusplus */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable comma-dangle */
/* eslint-disable no-use-before-define */





let focusAscend = true;
let statusAscend = true;
let descriptionAscend = true;
let projectAscend = true;
let startDateAscend = true;
let dueDateAscend = true;

const getList = (activeProject, showProject) => {
  if (showProject) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return activeProject.tasks;
  }
};

const sortByKey = (array, key, sortAscend) => {
  return array.sort((a, b) => {
    if (sortAscend) {
      return a[key] < b[key] ? -1 : 1;
    }
    return a[key] > b[key] ? -1 : 1;
  });
};

const updateTasksListHeader = (projects, activeProject, showProject) => {
  // Display the tasks list header
  const taskListHeaderEl = document.querySelector('.tasks-list-header');
  taskListHeaderEl.innerHTML = '';
  if (showProject) {
    taskListHeaderEl.classList.remove('not-show-project-name');
    taskListHeaderEl.classList.add('show-project-name');
  } else {
    taskListHeaderEl.classList.remove('show-project-name');
    taskListHeaderEl.classList.add('not-show-project-name');
  }

  const sortByFocusBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
    'btn',
    [],
    { style: 'cursor: pointer; display: flex; justify-content: center' },
    '↕️'
  );
  taskListHeaderEl.appendChild(sortByFocusBtn);
  sortByFocusBtn.addEventListener('click', () => {
    const list = getList(activeProject, showProject);
    focusAscend = focusAscend ? false : true;
    const sortedList = sortByKey(list, 'focus', focusAscend);
    localStorage.setItem('list', JSON.stringify(sortedList));
    updateTasksDisplay(projects, sortedList, showProject, false);
  });

  const sortByStatusBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
    'btn',
    [],
    { style: 'cursor: pointer; display: flex; justify-content: center' },
    '↕️'
  );
  taskListHeaderEl.appendChild(sortByStatusBtn);
  sortByStatusBtn.addEventListener('click', () => {
    const list = getList(activeProject, showProject);
    statusAscend = statusAscend ? false : true;
    const sortedList = sortByKey(list, 'status', statusAscend);
    localStorage.setItem('list', JSON.stringify(sortedList));
    updateTasksDisplay(projects, sortedList, showProject, false);
  });

  const headerDescriptionEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', [], {}, 'Description ');
  taskListHeaderEl.appendChild(headerDescriptionEl);
  const sortByDescriptionBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
    'btn',
    [],
    { style: 'cursor: pointer' },
    '↕️'
  );
  headerDescriptionEl.appendChild(sortByDescriptionBtn);
  sortByDescriptionBtn.addEventListener('click', () => {
    const list = getList(activeProject, showProject);
    descriptionAscend = descriptionAscend ? false : true;
    const sortedList = sortByKey(list, 'description', descriptionAscend);
    localStorage.setItem('list', JSON.stringify(sortedList));
    updateTasksDisplay(projects, sortedList, showProject, false);
  });

  if (showProject) {
    taskListHeaderEl.classList.remove('not-show-project-name');
    taskListHeaderEl.classList.add('show-project-name');
    const headerProjectNameEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', [], {}, 'Project ');
    taskListHeaderEl.appendChild(headerProjectNameEl);
    const sortByProjectBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
      'btn',
      [],
      { style: 'cursor: pointer' },
      '↕️'
    );
    headerProjectNameEl.appendChild(sortByProjectBtn);
    sortByProjectBtn.addEventListener('click', () => {
      const list = getList(activeProject, showProject);
      projectAscend = projectAscend ? false : true;
      // Todo: should sort by project name, not project index
      const sortedList = sortByKey(list, 'projectIndex', projectAscend);
      localStorage.setItem('list', JSON.stringify(sortedList));
      updateTasksDisplay(projects, sortedList, showProject, false);
    });
  }

  const headerStartDateEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', [], {}, 'Start Date ');
  taskListHeaderEl.appendChild(headerStartDateEl);
  const sortByStartDateBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
    'btn',
    [],
    { style: 'cursor: pointer' },
    '↕️'
  );
  headerStartDateEl.appendChild(sortByStartDateBtn);
  sortByStartDateBtn.addEventListener('click', () => {
    const list = getList(activeProject, showProject);
    startDateAscend = startDateAscend ? false : true;
    const sortedList = sortByKey(list, 'startDate', startDateAscend);
    localStorage.setItem('list', JSON.stringify(sortedList));
    updateTasksDisplay(projects, sortedList, showProject, false);
  });

  const headerDueDateEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', [], {}, 'Due Date ');
  taskListHeaderEl.appendChild(headerDueDateEl);
  const sortByDueDateBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
    'btn',
    [],
    { style: 'cursor: pointer' },
    '↕️'
  );
  headerDueDateEl.appendChild(sortByDueDateBtn);
  sortByDueDateBtn.addEventListener('click', () => {
    const list = getList(activeProject, showProject);
    dueDateAscend = dueDateAscend ? false : true;
    const sortedList = sortByKey(list, 'dueDate', dueDateAscend);
    localStorage.setItem('list', JSON.stringify(sortedList));
    updateTasksDisplay(projects, sortedList, showProject, false);
  });
};

const updateTasksDisplay = (projects, taskList, showProject, completedView) => {
  const showCompleted = JSON.parse(localStorage.getItem('showCompleted'));
  console.log("🚀 ~ file: dom-updateTasksDisplay.js:152 ~ updateTasksDisplay ~ showCompleted:", showCompleted)

  // Display the tasks list body
  _globalConstants__WEBPACK_IMPORTED_MODULE_2__.tasksListEl.innerHTML = '';
  let row = 0;
  taskList.forEach((task) => {
    // In case of the Completed view, show completed tasks anyways
    if (!completedView) {
      if (!showCompleted && task.status === 'dDone') return;
    }

    const taskEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
      'div',
      ['task'],
      {
        'data-projectIndex': task.projectIndex,
        'data-taskIndex': task.taskIndex,
      },
      ''
    );
    if (showProject) {
      taskEl.classList.add('show-project-name');
    } else {
      taskEl.classList.add('not-show-project-name');
    }

    let col = 0;
    const taskFocusEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
      'div',
      [],
      { 'data-row': row, 'data-col': col, style: 'color: red; text-align: center'},
      ''
    );
    // if (task.focus) {
    //   taskFocusEl.classList.add('mdi', 'mdi-weather-sunny');
    //   taskFocusEl.style.color = 'red';
    // } else {
    //   taskFocusEl.classList.add('mdi', 'mdi-blur');
    // }
    taskFocusEl.innerText = task.focus ? '‼️' : '🫥';
    taskEl.appendChild(taskFocusEl);

    col++;
    const taskStatusEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
      'div',
      ['mdi', _globalConstants__WEBPACK_IMPORTED_MODULE_2__.statusIcons[task.status]],
      {
        'data-row': row,
        'data-col': col,
        'data-statusindex': _globalConstants__WEBPACK_IMPORTED_MODULE_2__.status.indexOf(task.status),
        style: 'text-align: center'
      },
      ''
    );
    taskEl.appendChild(taskStatusEl);

    col++;
    const taskDescriptionEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
      'div',
      ['limited-text'],
      { 'data-row': row, 'data-col': col },
      task.description
    );
    if (task.status === 'dDone') {
      taskDescriptionEl.classList.add('done');
    }
    taskEl.appendChild(taskDescriptionEl);

    // If showing a view, rather than an active project
    if (showProject) {
      col++;
      let projectName = 'not assigned';
      if (!isNaN(Number(task.projectIndex))) {
        projectName = projects.projects[task.projectIndex].name;
      }
      const projectNameEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
        'div',
        ['limited-text'],
        { 'data-row': row, 'data-col': col },
        projectName
      );
      taskEl.appendChild(projectNameEl);
    }

    col++;
    const taskStartDateEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
      'div',
      [],
      { 'data-row': row, 'data-col': col },
      task.startDate
    );
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(task.startDate, 0)) {
      taskStartDateEl.classList.add('date-passed');
    }
    taskEl.appendChild(taskStartDateEl);

    col++;
    const taskDueDateEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
      'div',
      [],
      { 'data-row': row, 'data-col': col },
      task.dueDate
    );
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(task.dueDate, 0)) {
      taskDueDateEl.classList.add('date-passed');
    }
    taskEl.appendChild(taskDueDateEl);
    row++;

    _globalConstants__WEBPACK_IMPORTED_MODULE_2__.tasksListEl.appendChild(taskEl);
  });
};




/***/ }),

/***/ "./src/dom-views.js":
/*!**************************!*\
  !*** ./src/dom-views.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allTasksClickHandler": () => (/* binding */ allTasksClickHandler),
/* harmony export */   "completedClickHandler": () => (/* binding */ completedClickHandler),
/* harmony export */   "next7daysClickHandler": () => (/* binding */ next7daysClickHandler),
/* harmony export */   "todayClickHandler": () => (/* binding */ todayClickHandler),
/* harmony export */   "undatedClickHandler": () => (/* binding */ undatedClickHandler)
/* harmony export */ });
/* harmony import */ var _dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-updateTasksDisplay */ "./src/dom-updateTasksDisplay.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* eslint-disable no-param-reassign */



const todayClickHandler = (projects) => {
  const list = [];
  projects.projects.forEach((project) => {
    project.tasks.forEach((task, index) => {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(task.startDate, 0) || (0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(task.dueDate, 0)) {
        task.taskIndex = index;
        list.push(task);
      }
    });
  });
  localStorage.setItem('list', JSON.stringify(list));
  (0,_dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_0__.updateTasksDisplay)(projects, list, true);
};

const next7daysClickHandler = (projects) => {
  const list = [];
  projects.projects.forEach((project) => {
    project.tasks.forEach((task, index) => {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(task.startDate, 7) || (0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(task.dueDate, 7)) {
        task.taskIndex = index;
        list.push(task);
      }
    });
  });
  localStorage.setItem('list', JSON.stringify(list));
  (0,_dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_0__.updateTasksDisplay)(projects, list, true);
};

const undatedClickHandler = (projects) => {
  const list = [];
  projects.projects.forEach((project) => {
    project.tasks.forEach((task, index) => {
      if (!task.startDate && !task.dueDate) {
        task.taskIndex = index;
        list.push(task);
      }
    });
  });
  localStorage.setItem('list', JSON.stringify(list));
  (0,_dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_0__.updateTasksDisplay)(projects, list, true, true);
};

const completedClickHandler = (projects) => {
  const list = [];
  projects.projects.forEach((project) => {
    project.tasks.forEach((task, index) => {
      if (task.status === 'dDone') {
        task.taskIndex = index;
        list.push(task);
      }
    });
  });
  localStorage.setItem('list', JSON.stringify(list));
  (0,_dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_0__.updateTasksDisplay)(projects, list, true, true);
};

const allTasksClickHandler = (projects) => {
  const list = [];
  projects.projects.forEach((project) => {
    project.tasks.forEach((task, index) => {
      task.taskIndex = index;
      list.push(task);
    });
  });
  localStorage.setItem('list', JSON.stringify(list));
  (0,_dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_0__.updateTasksDisplay)(projects, list, true);
};




/***/ }),

/***/ "./src/globalConstants.js":
/*!********************************!*\
  !*** ./src/globalConstants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectListEl": () => (/* binding */ projectListEl),
/* harmony export */   "status": () => (/* binding */ status),
/* harmony export */   "statusIcons": () => (/* binding */ statusIcons),
/* harmony export */   "tasksListEl": () => (/* binding */ tasksListEl)
/* harmony export */ });
// Constants related to task status
const status = ['aTodo', 'bDoing', 'cWait', 'dDone'];
const statusIcons = {
  aTodo: 'mdi-checkbox-blank-circle-outline',
  bDoing: 'mdi-circle-half-full',
  cWait: 'mdi-timer-sand',
  dDone: 'mdi-checkbox-marked-circle',
};

// Global elements referred to in multiple js files
const projectListEl = document.querySelector('.project-list');
const tasksListEl = document.querySelector('.task-list');




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screenController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screenController */ "./src/screenController.js");


(0,_screenController__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-param-reassign */
const List = (name, existingTasks = []) => {
  const tasks = existingTasks || [];

  const printTasks = () => {
    tasks.forEach((task) => {
      console.log(task.title);
    });
  };

  const addTask = (task) => {
    tasks.push(task);
    // printTasks();
  };

  const removeTask = (index) => {
    if (index !== -1) {
      // Make sure the task exists in the list
      tasks.splice(index, 1);
    }
    // printTasks();
  };

  const moveTask = (index, newList) => {
    newList.addTask(tasks[index]);
    removeTask(index);
    // printTasks();
  };

  const updateTask = (index, attribute, value) => {
    switch (attribute) {
      case 'focus':
        tasks[index].focus = value;
        break;
      case 'status':
        tasks[index].status = value;
        break;
      case 'description':
        tasks[index].description = value;
        break;
      case 'startDate':
        tasks[index].startDate = value;
        break;
      case 'dueDate':
        tasks[index].dueDate = value;
        break;
      case 'projectIndex':
        tasks[index].projectIndex = value;
        break;

      default:
        break;
    }
  };

  // const renameList = (newName) => {
  //   name = newName;
  // }

  return {
    get name() {
      return name;
    },
    set name(newName) {
      name = newName;
    },
    get tasks() {
      return tasks;
    },
    addTask,
    updateTask,
    removeTask,
    moveTask,
    printTasks,
    // renameList,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* eslint-disable no-param-reassign */


const Projects = () => {
  // A list of projects that will each contain a list of tasks
  const projects = [];

  const saveProjects = () => {
    localStorage.projects = JSON.stringify(projects);
  };

  // Create a new project
  const addProject = (name, data) => {
    if (!data) {
      const project = (0,_list__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
      projects.push(project);
    } else {
      const project = (0,_list__WEBPACK_IMPORTED_MODULE_0__["default"])(name, data);
      projects.push(project);
    }
    saveProjects();
  };

  // Assign a task to a particular project
  const addTaskToProject = (task, project) => {
    project.addTask(task);
    saveProjects();
  };

  const deleteTaskFromProject = (index, project) => {
    project.removeTask(index);
    saveProjects();
  };

  const updateTaskinProject = (project, index, attribute, value) => {
    project.updateTask(index, attribute, value);
    saveProjects();
  };

  const moveTasktoProject = (project, index, otherProject) => {
    project.moveTask(index, otherProject);
    saveProjects();
  };

  // Swap the order of 2 projects
  const swapProject = (x, y) => {
    [projects[x], projects[y]] = [projects[y], projects[x]];
    saveProjects();
  };

  // Change the name of the project
  const renameProject = (project, newName) => {
    project.name = newName;
    saveProjects();
  };

  // Remove a new project
  const removeProject = (index) => {
    projects.splice(index, 1);
    saveProjects();
  };

  return {
    addProject,
    addTaskToProject,
    deleteTaskFromProject,
    updateTaskinProject,
    moveTasktoProject,
    removeProject,
    swapProject,
    saveProjects,
    renameProject,
    get projects() {
      return projects;
    },
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);


/***/ }),

/***/ "./src/screenController.js":
/*!*********************************!*\
  !*** ./src/screenController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globalConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalConstants */ "./src/globalConstants.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-updateTasksDisplay */ "./src/dom-updateTasksDisplay.js");
/* harmony import */ var _dom_views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-views */ "./src/dom-views.js");
/* harmony import */ var _dom_tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-tasks */ "./src/dom-tasks.js");
/* harmony import */ var _dom_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom-projects */ "./src/dom-projects.js");
/* eslint-disable no-use-before-define */
/* eslint-disable comma-dangle */







const screenController = () => {
  // Create a Projects object with an empty list of projects
  const projects = (0,_projects__WEBPACK_IMPORTED_MODULE_1__["default"])();
  // Read saved projects data from local storage
  const data = JSON.parse(localStorage.getItem('projects'));
  if (!data) {
    // If no data exists, create an empty Inbox
    projects.addProject('Inbox');
  } else {
    // Otherwise, rebuild the projects[] by creating a list of project objects
    // based on the stored names and tasks
    data.forEach((projectData) => {
      if (projectData) projects.addProject(projectData.name, projectData.tasks);
    });
  }

  // Make Inbox the activeProject
  let activeProject = projects.projects[0];

  // Default to show Inbox
  let showView = false;
  let list = [];

  // Read the show completed tasks setting from local storage
  let showCompleted = JSON.parse(localStorage.getItem('showCompleted'));
  if (!showCompleted) showCompleted = false;

  // Event listners
  // --- the elements ---
  const addTaskBtn = document.querySelector('.add-task');
  const addProjectBtn = document.querySelector('.add-project');
  const showCompletedCheckbox = document.querySelector('#show-completed');
  showCompletedCheckbox.checked = showCompleted;

  const disableButtons = () => {
    addProjectBtn.disabled = true;
    addTaskBtn.disabled = true;
    showCompletedCheckbox.disabled = true;
  };

  const enableButtons = () => {
    addProjectBtn.disabled = false;
    addTaskBtn.disabled = false;
    showCompletedCheckbox.disabled = false;
  };

  const updateCurrentView = () => {
    if (showView) {
      list = JSON.parse(localStorage.getItem('list'));
      (0,_dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_2__.updateTasksDisplay)(projects, list, showView, showView === 'completed');
    } else {
      (0,_dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_2__.updateTasksDisplay)(projects, activeProject.tasks);
    }
  };

  // The body
  const bodyEl = document.querySelector('body');
  bodyEl.addEventListener('click', (e) => {
    // Clicking on any element with 'dismiss' will refresh the projects and tasks list
    // This dismisses any open add task, edit task and add project forms
    // Also enables add task, add project and show completed setting buttons/checkbox
    if (e.target.classList.contains('dismiss')) {
      // Dismiss any task being edited
      updateCurrentView();
      enableButtons();
    }
  });

  // The add task button
  // ^ When adding a new task, the form is dismissed by
  // 1. click on the Submit button
  // 2. click on any element with the class 'dismiss'
  // 3. click on a project in the projects list
  addTaskBtn.addEventListener('click', () => {
    // Disable the follow elements when adding a new task
    // This prevents multiple elements added on screen
    disableButtons();
    // Wait until a new Task is added
    (0,_dom_tasks__WEBPACK_IMPORTED_MODULE_4__.addNewTask)(projects, activeProject, showView !== false).then(() => {
      updateCurrentView();
      // After a new task is created, re- enable these disabled elements
      enableButtons();
    });
  });

  // The add project button
  // ^ When adding a new project, the form is dismissed by
  // 1. press enter to 'change' the name
  // 2. click on any element with the 'dismiss' class
  // 3. presse 'Esc"
  addProjectBtn.addEventListener('click', () => {
    disableButtons();
    (0,_dom_projects__WEBPACK_IMPORTED_MODULE_5__.addNewProject)(projects)
      .then(() => {
        activeProject = projects.projects[projects.projects.length - 1];
        (0,_dom_projects__WEBPACK_IMPORTED_MODULE_5__.updateProjectsDisplay)(projects, activeProject);
        (0,_dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_2__.updateTasksDisplay)(projects, activeProject.tasks);
        enableButtons();
      })
      .catch(() => {
        enableButtons();
      });
  });

  // The projects list
  _globalConstants__WEBPACK_IMPORTED_MODULE_0__.projectListEl.addEventListener('click', (e) => {
    (0,_dom_projects__WEBPACK_IMPORTED_MODULE_5__.projectListClickHandler)(e, projects).then((index) => {
      activeProject = projects.projects[index];
      (0,_dom_projects__WEBPACK_IMPORTED_MODULE_5__.updateProjectsDisplay)(projects, activeProject);
      showView = false;
      removeViewHighlight();
      (0,_dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_2__.updateTasksListHeader)(projects, activeProject, showView !== false);
      (0,_dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_2__.updateTasksDisplay)(projects, activeProject.tasks, showView);
    });
  });

  // The tasks llist
  // ^ The edit form is dismiss by:
  // 1. change one attribute of a task
  // 2. click on any elements with 'dismiss' class
  // 3. click on a project
  _globalConstants__WEBPACK_IMPORTED_MODULE_0__.tasksListEl.addEventListener('click', (e) => {
    // Refresh the project list, in case an add project form is open
    (0,_dom_projects__WEBPACK_IMPORTED_MODULE_5__.updateProjectsDisplay)(projects, activeProject);

    const { row } = e.target.dataset;
    const { col } = e.target.dataset;
    // Ignores:
    // - click on the margin of a task
    // - click on the empty space or the submit button of add task
    // - click on input fileds of editing a task
    if (!row || !col) {
      return;
    }

    disableButtons();

    // Dismiss any task being edited
    updateCurrentView();

    (0,_dom_tasks__WEBPACK_IMPORTED_MODULE_4__.taskListClickHandler)(
      row,
      col,
      projects,
      activeProject,
      showView !== false
    ).then(() => {
      if (showView) {
        // Update list, otherwise edits are not visible
        switch (showView) {
          case 'today':
            (0,_dom_views__WEBPACK_IMPORTED_MODULE_3__.todayClickHandler)(projects);
            break;
          case 'next7days':
            (0,_dom_views__WEBPACK_IMPORTED_MODULE_3__.next7daysClickHandler)(projects);
            break;
          case 'undated':
            (0,_dom_views__WEBPACK_IMPORTED_MODULE_3__.undatedClickHandler)(projects);
            break;
          case 'completed':
            (0,_dom_views__WEBPACK_IMPORTED_MODULE_3__.completedClickHandler)(projects);
            break;
          case 'allTasks':
            (0,_dom_views__WEBPACK_IMPORTED_MODULE_3__.allTasksClickHandler)(projects);
            break;
          default:
            break;
        }
      }
      updateCurrentView();
      enableButtons();
    });
  });

  // The show completed tasks checkbox
  showCompletedCheckbox.addEventListener('change', () => {
    showCompleted = showCompletedCheckbox.checked;
    localStorage.setItem('showCompleted', JSON.stringify(showCompleted));
    updateCurrentView();
  });

  // Views
  const todayEl = document.querySelector('#today');
  const next7daysEl = document.querySelector('#next7days');
  const undatedEl = document.querySelector('#undated');
  const completedEl = document.querySelector('#completed');
  const allTasksEl = document.querySelector('#all-tasks');

  // Clear highlight in Views
  const removeViewHighlight = () => {
    todayEl.classList.remove('active-view');
    next7daysEl.classList.remove('active-view');
    undatedEl.classList.remove('active-view');
    completedEl.classList.remove('active-view');
    allTasksEl.classList.remove('active-view');
  };

  // The views event listeners
  todayEl.addEventListener('click', () => {
    // Remove highlight of active project, by updating without activeProject
    activeProject = null;
    (0,_dom_projects__WEBPACK_IMPORTED_MODULE_5__.updateProjectsDisplay)(projects);
    removeViewHighlight();
    todayEl.classList.add('active-view');
    showView = 'today';
    (0,_dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_2__.updateTasksListHeader)(projects, activeProject, showView !== false);
    (0,_dom_views__WEBPACK_IMPORTED_MODULE_3__.todayClickHandler)(projects);
  });

  next7daysEl.addEventListener('click', () => {
    // Remove highlight of active project, by updating without activeProject
    (0,_dom_projects__WEBPACK_IMPORTED_MODULE_5__.updateProjectsDisplay)(projects);
    removeViewHighlight();
    next7daysEl.classList.add('active-view');
    showView = 'next7days';
    (0,_dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_2__.updateTasksListHeader)(projects, activeProject, showView !== false);
    (0,_dom_views__WEBPACK_IMPORTED_MODULE_3__.next7daysClickHandler)(projects);
  });

  undatedEl.addEventListener('click', () => {
    // Remove highlight of active project, by updating without activeProject
    (0,_dom_projects__WEBPACK_IMPORTED_MODULE_5__.updateProjectsDisplay)(projects);
    removeViewHighlight();
    undatedEl.classList.add('active-view');
    showView = 'undated';
    (0,_dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_2__.updateTasksListHeader)(projects, activeProject, showView !== false);
    (0,_dom_views__WEBPACK_IMPORTED_MODULE_3__.undatedClickHandler)(projects);
  });

  completedEl.addEventListener('click', () => {
    // Remove highlight of active project, by updating without activeProject
    (0,_dom_projects__WEBPACK_IMPORTED_MODULE_5__.updateProjectsDisplay)(projects);
    removeViewHighlight();
    completedEl.classList.add('active-view');
    showView = 'completed';
    (0,_dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_2__.updateTasksListHeader)(projects, activeProject, showView !== false);
    (0,_dom_views__WEBPACK_IMPORTED_MODULE_3__.completedClickHandler)(projects);
  });

  allTasksEl.addEventListener('click', () => {
    // Remove highlight of active project, by updating without activeProject
    (0,_dom_projects__WEBPACK_IMPORTED_MODULE_5__.updateProjectsDisplay)(projects);
    removeViewHighlight();
    allTasksEl.classList.add('active-view');
    showView = 'allTasks';
    (0,_dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_2__.updateTasksListHeader)(projects, activeProject, showView !== false);
    (0,_dom_views__WEBPACK_IMPORTED_MODULE_3__.allTasksClickHandler)(projects);
  });

  (0,_dom_projects__WEBPACK_IMPORTED_MODULE_5__.updateProjectsDisplay)(projects, activeProject);
  (0,_dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_2__.updateTasksListHeader)(projects, activeProject, showView !== false);
  (0,_dom_updateTasksDisplay__WEBPACK_IMPORTED_MODULE_2__.updateTasksDisplay)(projects, activeProject.tasks, showView);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (screenController);


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Task = (focus, status, description, startDate, dueDate, projectIndex, taskIndex) => ({
  focus,
  status,
  description,
  startDate,
  dueDate,
  projectIndex,
  taskIndex,
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function isBefore(dateString, days) {
  // Parse the input date string into a Date object
  const inputDate = new Date(dateString);
  if (!inputDate) return false;

  // Get today's date
  const today = new Date();

  const currentTimestamp = today.getTime();

  const futureDate = currentTimestamp + days * 24 * 60 * 60 * 1000;

  const daysLater = new Date(futureDate);

  // Set the time part of both dates to 00:00:00 to compare only the dates
  inputDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  // Compare the dates
  if (inputDate < daysLater) {
    return true;
  }
  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBefore);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxFQUFFLDJFQUFrQjtBQUNwQjs7QUFRRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUUyRDs7Ozs7Ozs7Ozs7OztBQ2JUOztBQUVsRCw2REFBZ0I7Ozs7Ozs7Ozs7Ozs7OztBQ0ZoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzlFcEI7QUFDMEI7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFJO0FBQzFCO0FBQ0EsTUFBTTtBQUNOLHNCQUFzQixpREFBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QUFxQjtBQUN6QixHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJLG9FQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhFQUFxQjtBQUN6QixJQUFJLGdFQUFvQjtBQUN4QixHQUFHOztBQUVILEVBQUUsb0VBQXFCO0FBQ3ZCLEVBQUUsOEVBQXFCO0FBQ3ZCLEVBQUUsMkVBQWtCO0FBQ3BCOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNwUmhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDVnBCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0dG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV4dHRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25leHR0b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbmV4dHRvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbmV4dHRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbmV4dHRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25leHR0b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25leHR0b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25leHR0b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbmV4dHRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9uZXh0dG9kby8uL3NyYy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL25leHR0b2RvLy4vc3JjL2RvbS1wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9uZXh0dG9kby8uL3NyYy9kb20tdGFza3MuanMiLCJ3ZWJwYWNrOi8vbmV4dHRvZG8vLi9zcmMvZG9tLXVwZGF0ZVRhc2tzRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9uZXh0dG9kby8uL3NyYy9kb20tdmlld3MuanMiLCJ3ZWJwYWNrOi8vbmV4dHRvZG8vLi9zcmMvZ2xvYmFsQ29uc3RhbnRzLmpzIiwid2VicGFjazovL25leHR0b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL25leHR0b2RvLy4vc3JjL2xpc3QuanMiLCJ3ZWJwYWNrOi8vbmV4dHRvZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vbmV4dHRvZG8vLi9zcmMvc2NyZWVuQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9uZXh0dG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL25leHR0b2RvLy4vc3JjL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGJvcmRlcjogMXB4IHJlZCBzb2xpZDsgKi9cXG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnIgMjBmcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCBhdXRvO1xcbn1cXG5cXG4uaW5ib3gsIC5hZGQtdGFzaywgLmFkZC1wcm9qZWN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgbWFyZ2luOiA1cHggMiU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMS41cmVtIGF1dG8gNTBweDtcXG59XFxuXFxuaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4udmlld3MtY29udGFpbmVyLCAucHJvamVjdHMtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLnZpZXcsIC5wcm9qZWN0IHtcXG4gIC8qIG1hcmdpbi1sZWZ0OiAwLjVyZW07ICovXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbjogMC4ycmVtIDA7XFxufVxcblxcbi5wcm9qZWN0cy1oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDFmcjtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICBtYXgtd2lkdGg6IDIwMHB4OyAvKiBTZXQgdGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGRpdiAqL1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogSGlkZSB0aGUgY29udGVudCB0aGF0IGV4Y2VlZHMgdGhlIG1heC13aWR0aCAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogUHJldmVudCB0aGUgdGV4dCBmcm9tIHdyYXBwaW5nIHRvIGEgbmV3IGxpbmUgKi9cXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAvKiBBZGQgZWxsaXBzaXMgKC4uLikgdG8gaW5kaWNhdGUgdGhlIHRleHQgaXMgdHJ1bmNhdGVkICovXFxufVxcblxcbi5hY3RpdmUtdmlldywgLmFjdGl2ZS1wcm9qZWN0IHtcXG4gIGNvbG9yOiBibHVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cXG4ucHJvamVjdC1taW5pLW1lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICBnYXA6IDNweDtcXG59XFxuXFxuLnByb2plY3QtbWluaS1tZW51LWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5zZXR0aW5ncy1jb250YWluZXIge1xcbiAgbWFyZ2luOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBib3JkZXItbGVmdDogMXB4IHJlZCBzb2xpZDtcXG59XFxuXFxuLnRhc2tzLWxpc3QtaGVhZGVyLCAudGFzayB7XFxuICBtYXJnaW46IDAgMSU7XFxufVxcblxcbi50YXNrcy1saXN0LWhlYWRlciB7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBkYXJrZ3JheSBzb2xpZDtcXG59XFxuXFxuLm5vdC1zaG93LXByb2plY3QtbmFtZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDE1ZnIgM2ZyIDNmcjtcXG59XFxuXFxuLnNob3ctcHJvamVjdC1uYW1lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMTVmciAzZnIgM2ZyIDNmcjtcXG59XFxuXFxuLnRhc2sge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIG1hcmdpbjogMCAxJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZ3JheTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuXFxuLnRhc2stbGlzdCB7XFxuICAvKiBib3JkZXI6IDFweCBibHVlIHNvbGlkOyAqL1xcbiAgbWF4LWhlaWdodDogNTB2aDtcXG59XFxuXFxuLmFjdGl2ZS10YXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLm5ldy10YXNrIHtcXG4gIG1hcmdpbjogMCAxJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMTVmciAzZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4ubmV3LXRhc2std2l0aC1wcm9qZWN0IHtcXG4gIG1hcmdpbjogMCAxJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMTVmciAzZnIgM2ZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLmVkaXRpbmctdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBtYXJnaW46IDAgMSU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDE1ZnIgM2ZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLmxpbWl0ZWQtdGV4dCB7XFxuICBtYXgtd2lkdGg6IDk1JTsgLyogU2V0IHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBkaXYgKi9cXG4gIG92ZXJmbG93OiBoaWRkZW47IC8qIEhpZGUgdGhlIGNvbnRlbnQgdGhhdCBleGNlZWRzIHRoZSBtYXgtd2lkdGggKi9cXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIFByZXZlbnQgdGhlIHRleHQgZnJvbSB3cmFwcGluZyB0byBhIG5ldyBsaW5lICovXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgLyogQWRkIGVsbGlwc2lzICguLi4pIHRvIGluZGljYXRlIHRoZSB0ZXh0IGlzIHRydW5jYXRlZCAqL1xcbn1cXG5cXG4uZm9jdXMtYnRuIHtcXG4gIG1hcmdpbjogM3B4IDE1cHggM3B4IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kb25lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoXFxufVxcblxcbi5kYXRlLXBhc3NlZCB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICBtYXJnaW46IDNweCAzMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isc0hBQXNIO0FBQ3hIOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0IsRUFBRSxxQ0FBcUM7RUFDdkQsZ0JBQWdCLEVBQUUsZ0RBQWdEO0VBQ2xFLG1CQUFtQixFQUFFLGlEQUFpRDtFQUN0RSx1QkFBdUIsRUFBRSx5REFBeUQ7QUFDcEY7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7OztBQUdBO0VBQ0UsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsK0NBQStDO0VBQy9DLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osYUFBYTtFQUNiLDJDQUEyQztFQUMzQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjLEVBQUUscUNBQXFDO0VBQ3JELGdCQUFnQixFQUFFLGdEQUFnRDtFQUNsRSxtQkFBbUIsRUFBRSxpREFBaUQ7RUFDdEUsdUJBQXVCLEVBQUUseURBQXlEO0FBQ3BGOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogYm9yZGVyOiAxcHggcmVkIHNvbGlkOyAqL1xcbiAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDE1ZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmciAyMGZyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IGF1dG87XFxufVxcblxcbi5pbmJveCwgLmFkZC10YXNrLCAuYWRkLXByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBtYXJnaW46IDVweCAyJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDExLjVyZW0gYXV0byA1MHB4O1xcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi52aWV3cy1jb250YWluZXIsIC5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4udmlldywgLnByb2plY3Qge1xcbiAgLyogbWFyZ2luLWxlZnQ6IDAuNXJlbTsgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWFyZ2luOiAwLjJyZW0gMDtcXG59XFxuXFxuLnByb2plY3RzLWhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMWZyO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gIG1heC13aWR0aDogMjAwcHg7IC8qIFNldCB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgZGl2ICovXFxuICBvdmVyZmxvdzogaGlkZGVuOyAvKiBIaWRlIHRoZSBjb250ZW50IHRoYXQgZXhjZWVkcyB0aGUgbWF4LXdpZHRoICovXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiBQcmV2ZW50IHRoZSB0ZXh0IGZyb20gd3JhcHBpbmcgdG8gYSBuZXcgbGluZSAqL1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IC8qIEFkZCBlbGxpcHNpcyAoLi4uKSB0byBpbmRpY2F0ZSB0aGUgdGV4dCBpcyB0cnVuY2F0ZWQgKi9cXG59XFxuXFxuLmFjdGl2ZS12aWV3LCAuYWN0aXZlLXByb2plY3Qge1xcbiAgY29sb3I6IGJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxufVxcblxcbi5wcm9qZWN0LW1pbmktbWVudSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gIGdhcDogM3B4O1xcbn1cXG5cXG4ucHJvamVjdC1taW5pLW1lbnUtYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnNldHRpbmdzLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5tYWluIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggcmVkIHNvbGlkO1xcbn1cXG5cXG4udGFza3MtbGlzdC1oZWFkZXIsIC50YXNrIHtcXG4gIG1hcmdpbjogMCAxJTtcXG59XFxuXFxuLnRhc2tzLWxpc3QtaGVhZGVyIHtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IGRhcmtncmF5IHNvbGlkO1xcbn1cXG5cXG4ubm90LXNob3ctcHJvamVjdC1uYW1lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMTVmciAzZnIgM2ZyO1xcbn1cXG5cXG4uc2hvdy1wcm9qZWN0LW5hbWUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxNWZyIDNmciAzZnIgM2ZyO1xcbn1cXG5cXG4udGFzayB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgbWFyZ2luOiAwIDElO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtncmF5O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5cXG4udGFzay1saXN0IHtcXG4gIC8qIGJvcmRlcjogMXB4IGJsdWUgc29saWQ7ICovXFxuICBtYXgtaGVpZ2h0OiA1MHZoO1xcbn1cXG5cXG4uYWN0aXZlLXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4ubmV3LXRhc2sge1xcbiAgbWFyZ2luOiAwIDElO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxNWZyIDNmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi5uZXctdGFzay13aXRoLXByb2plY3Qge1xcbiAgbWFyZ2luOiAwIDElO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxNWZyIDNmciAzZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4uZWRpdGluZy10YXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gIG1hcmdpbjogMCAxJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMTVmciAzZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4ubGltaXRlZC10ZXh0IHtcXG4gIG1heC13aWR0aDogOTUlOyAvKiBTZXQgdGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGRpdiAqL1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogSGlkZSB0aGUgY29udGVudCB0aGF0IGV4Y2VlZHMgdGhlIG1heC13aWR0aCAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogUHJldmVudCB0aGUgdGV4dCBmcm9tIHdyYXBwaW5nIHRvIGEgbmV3IGxpbmUgKi9cXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAvKiBBZGQgZWxsaXBzaXMgKC4uLikgdG8gaW5kaWNhdGUgdGhlIHRleHQgaXMgdHJ1bmNhdGVkICovXFxufVxcblxcbi5mb2N1cy1idG4ge1xcbiAgbWFyZ2luOiAzcHggMTVweCAzcHggMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRvbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2hcXG59XFxuXFxuLmRhdGUtcGFzc2VkIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5kZWxldGUtYnRuIHtcXG4gIG1hcmdpbjogM3B4IDMwJTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjbGFzc0FycmF5LCBhdHRyT2JqLCB0ZXh0KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NBcnJheSk7XG5cbiAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJPYmopIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyT2JqW2F0dHJdKTtcbiAgfVxuXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLWRhbmdsZSAqL1xuLy8gaW1wb3J0IFwiQG1kaS9mb250L2Nzcy9tYXRlcmlhbGRlc2lnbmljb25zLm1pbi5jc3NcIjtcbmltcG9ydCAqIGFzIGdsb2JhbCBmcm9tICcuL2dsb2JhbENvbnN0YW50cyc7XG5pbXBvcnQgeyB1cGRhdGVUYXNrc0Rpc3BsYXkgfSBmcm9tICcuL2RvbS11cGRhdGVUYXNrc0Rpc3BsYXknO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcblxuLy8gQWRkIG1pbmkgbWVudSB0byB0aGUgYWN0aXZlIHByb2plY3RcbmNvbnN0IGFkZFByb2plY3RNaW5pTWVudSA9IChwcm9qZWN0cywgcHJvamVjdEVsLCBpbmRleCkgPT4ge1xuICAvLyBPbmx5IGFkZCB0aGUgbWluaSBtZW51IGZvciBwcm9qZWN0cyBvdGhlciB0aGFuIEluYm94XG4gIGlmIChpbmRleCA+IDApIHtcbiAgICAvLyBNYWtlIHByb2plY3QgYW5kIHByb2plY3QgbmFtZSB2aXN1YWxseSB1bmNsaWNrYWJsZVxuICAgIHByb2plY3RFbC5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG4gICAgcHJvamVjdEVsLmNoaWxkcmVuWzBdLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcblxuICAgIC8vIENyZWF0ZSBtaW5pIG1lbnVcbiAgICBjb25zdCBtZW51RWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3Byb2plY3QtbWluaS1tZW51J10sIHt9LCAnJyk7XG4gICAgcHJvamVjdEVsLmFwcGVuZENoaWxkKG1lbnVFbCk7XG4gICAgLy8gQWRkIGEgcGxhY2UgaG9sZGVyIGluIHRoZSBmcm9udCBzbyB0aGUgYnV0dG9ucyBhcmUgb24gdGhlIHJpZ2h0XG4gICAgbWVudUVsLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFtdLCB7fSwgJycpKTtcblxuICAgIC8vIFRoZSB1cCBhcnJvd1xuICAgIC8vIERvIG5vdCBzaG93IGZvciB0aGUgcHJvamVjdCBqdXN0IGJlbG93IEluYm94XG4gICAgaWYgKGluZGV4ID4gMSkge1xuICAgICAgbWVudUVsLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdidXR0b24nLFxuICAgICAgICAgIFsncHJvamVjdC1taW5pLW1lbnUtYnV0dG9uJywgJ21kaScsICdtZGktY2hldnJvbi11cCddLFxuICAgICAgICAgIHsgJ2RhdGEtYnRuJzogJ3VwJyB9LFxuICAgICAgICAgICcnXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnVFbC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCBbXSwge30sICcnKSk7XG4gICAgfVxuXG4gICAgLy8gU2hvdyB0aGUgZG93biBhcnJvd1xuICAgIC8vIERvIG5vdCBzaG93IGZvciB0aGUgcHJvamVjdCBhdCB0aGUgYm90dG9uIG9mIHRoZSBsaXN0XG4gICAgaWYgKGluZGV4IDwgcHJvamVjdHMucHJvamVjdHMubGVuZ3RoIC0gMSkge1xuICAgICAgbWVudUVsLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdidXR0b24nLFxuICAgICAgICAgIFsncHJvamVjdC1taW5pLW1lbnUtYnV0dG9uJywgJ21kaScsICdtZGktY2hldnJvbi1kb3duJ10sXG4gICAgICAgICAgeyAnZGF0YS1idG4nOiAnZG93bicgfSxcbiAgICAgICAgICAnJ1xuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51RWwuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2JywgW10sIHt9LCAnJykpO1xuICAgIH1cblxuICAgIC8vIFRoZSBlZGl0IGJ1dHRvblxuICAgIG1lbnVFbC5hcHBlbmRDaGlsZChcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdidXR0b24nLFxuICAgICAgICBbJ3Byb2plY3QtbWluaS1tZW51LWJ1dHRvbicsICdtZGknLCAnbWRpLXNxdWFyZS1lZGl0LW91dGxpbmUnXSxcbiAgICAgICAgeyAnZGF0YS1idG4nOiAnZWRpdCcgfSxcbiAgICAgICAgJydcbiAgICAgIClcbiAgICApO1xuXG4gICAgLy8gVGhlIGRlbGV0ZSBidXR0b25cbiAgICBtZW51RWwuYXBwZW5kQ2hpbGQoXG4gICAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgWydwcm9qZWN0LW1pbmktbWVudS1idXR0b24nLCAnbWRpJywgJ21kaS1jbG9zZSddLFxuICAgICAgICB7ICdkYXRhLWJ0bic6ICdyZW1vdmUnLCBzdHlsZTogJ2NvbG9yOiByZWQnIH0sXG4gICAgICAgICcnXG4gICAgICApXG4gICAgKTtcbiAgfVxufTtcblxuLy8gUmVkcmF3cyB0aGUgcHJvamVjdHMgbGlzdFxuY29uc3QgdXBkYXRlUHJvamVjdHNEaXNwbGF5ID0gKHByb2plY3RzLCBhY3RpdmVQcm9qZWN0KSA9PiB7XG4gIC8vIEVtcHR5IHRoZSBjb250ZW50IG9mIHRoZSBwcm9qZWN0cyBsaXN0XG4gIGdsb2JhbC5wcm9qZWN0TGlzdEVsLmlubmVySFRNTCA9ICcnO1xuXG4gIC8vIEdvIHRocm91Z2ggZWFjaCBwcm9qZWN0IGluIHByb2plY3RzW11cbiAgcHJvamVjdHMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3Byb2plY3QnXSwgeyAnZGF0YS1pZCc6IGluZGV4IH0pO1xuICAgIGNvbnN0IHByb2plY3ROYW1lRWwgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBbJ3Byb2plY3QtbmFtZScsICdtZGknLCAnbWRpLWxpc3QtYm94LW91dGxpbmUnXSxcbiAgICAgIHsgc3R5bGU6ICdjdXJzb3I6IHBvaW50ZXInIH0sXG4gICAgICBgICR7cHJvamVjdC5uYW1lfWBcbiAgICApO1xuICAgIHByb2plY3RFbC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUVsKTtcblxuICAgIC8vIEhpZ2hsaWdodCB0aGUgYWN0aXZlIHByb2plY3QsIGFuZCBhZGQgYSBtaW5pIG1lbnVcbiAgICBpZiAocHJvamVjdCA9PT0gYWN0aXZlUHJvamVjdCkge1xuICAgICAgcHJvamVjdEVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgICBhZGRQcm9qZWN0TWluaU1lbnUocHJvamVjdHMsIHByb2plY3RFbCwgaW5kZXgpO1xuICAgIH1cblxuICAgIGdsb2JhbC5wcm9qZWN0TGlzdEVsLmFwcGVuZENoaWxkKHByb2plY3RFbCk7XG4gIH0pO1xufTtcblxuLy8gQWRkIGEgbmV3IHByb2plY3RcbmNvbnN0IGFkZE5ld1Byb2plY3QgPSAocHJvamVjdHMpID0+IHtcbiAgY29uc3QgaW5wdXRFbCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgWydwcm9qZWN0LXRpdGxlJ10sIHt9KTtcbiAgZ2xvYmFsLnByb2plY3RMaXN0RWwuYXBwZW5kQ2hpbGQoaW5wdXRFbCk7XG4gIGlucHV0RWwuZm9jdXMoKTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vIEdldCBhIG5hbWUgZm9yIHRoZSBuZXcgcHJvamVjdFxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgcHJvamVjdHMuYWRkUHJvamVjdChpbnB1dEVsLnZhbHVlKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgICAvLyBMaXN0ZW4gZm9yIHRoZSBFc2Mga2V5XG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgIGdsb2JhbC5wcm9qZWN0TGlzdEVsLnJlbW92ZUNoaWxkKGlucHV0RWwpO1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBFdmVudCBsaXN0ZW5lciBmb3IgUHJvamVjdHMgTGlzdFxuY29uc3QgcHJvamVjdExpc3RDbGlja0hhbmRsZXIgPSAoZSwgcHJvamVjdHMpID0+IHtcbiAgbGV0IGluZGV4O1xuICBsZXQgYWN0aXZlUHJvamVjdDtcbiAgY29uc3QgcGFyZW50RWwgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICBjb25zdCBncmFuZFBhcmVudEVsID0gcGFyZW50RWwucGFyZW50RWxlbWVudDtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAvLyBDbGlja2VkIG9uIGEgcHJvamVjdC1uYW1lXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdC1uYW1lJykpIHtcbiAgICAgIC8vIGlkIGlzIHN0b3JlZCBhcyBhIHN0cmluZywgbmVlZCB0byBjb252ZXJ0IGl0IHRvIGEgbnVtYmVyIHRvIGF2b2lkIGlzc3Vlc1xuICAgICAgaW5kZXggPSBOdW1iZXIocGFyZW50RWwuZGF0YXNldC5pZCk7XG4gICAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdHMucHJvamVjdHNbaW5kZXhdO1xuICAgICAgdXBkYXRlVGFza3NEaXNwbGF5KHByb2plY3RzLCBhY3RpdmVQcm9qZWN0LnRhc2tzKTtcbiAgICAgIHJlc29sdmUoaW5kZXgpO1xuICAgIH1cbiAgICAvLyBDbGlja2VkIG9uIGEgbWluaSBtZW51XG4gICAgZWxzZSBpZiAocGFyZW50RWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0LW1pbmktbWVudScpKSB7XG4gICAgICAvLyBpZCBpcyBzdG9yZWQgYXMgYSBzdHJpbmcsIG5lZWQgdG8gY29udmVydCBpdCB0byBhIG51bWJlciB0byBhdm9pZCBpc3N1ZXNcbiAgICAgIGluZGV4ID0gTnVtYmVyKGdyYW5kUGFyZW50RWwuZGF0YXNldC5pZCk7XG5cbiAgICAgIHN3aXRjaCAoZS50YXJnZXQuZGF0YXNldC5idG4pIHtcbiAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgIHByb2plY3RzLnN3YXBQcm9qZWN0KGluZGV4LCBpbmRleCAtIDEpO1xuICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgcmVzb2x2ZShpbmRleCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgIHByb2plY3RzLnN3YXBQcm9qZWN0KGluZGV4LCBpbmRleCArIDEpO1xuICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgcmVzb2x2ZShpbmRleCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICAgIC8vIFJlcGxhY2UgcHJvamVjdCBuYW1lIHdpdGggYW4gaW5wdXRcbiAgICAgICAgICBjb25zdCBpbnB1dEVsID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBbXSwge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgdmFsdWU6IGdyYW5kUGFyZW50RWwuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQsXG4gICAgICAgICAgICAnZGF0YS1pZCc6IGluZGV4LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGdyYW5kUGFyZW50RWwucmVwbGFjZUNoaWxkKGlucHV0RWwsIGdyYW5kUGFyZW50RWwuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgIGlucHV0RWwuZm9jdXMoKTtcblxuICAgICAgICAgIC8vIExpc3RlbiBmb3IgY2hhbmdlIGluIHRoZSBpbnB1dFxuICAgICAgICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWVFbCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAncHJvamVjdC1uYW1lJyxcbiAgICAgICAgICAgICAgeyBzdHlsZTogJ2N1cnNvcjogcG9pbnRlcicsICdkYXRhLWlkJzogaW5kZXggfSxcbiAgICAgICAgICAgICAgaW5wdXRFbC52YWx1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIFJlbmFtZSBwcm9qZWN0IGluIHRoZSBkYXRhYmFzZVxuICAgICAgICAgICAgYWN0aXZlUHJvamVjdCA9IHByb2plY3RzLnByb2plY3RzW2luZGV4XTtcbiAgICAgICAgICAgIHByb2plY3RzLnJlbmFtZVByb2plY3QoYWN0aXZlUHJvamVjdCwgaW5wdXRFbC52YWx1ZSk7XG4gICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBpbnB1dCB3aXRoIHRoZSBuZXcgcHJvamVjdCBuYW1lXG4gICAgICAgICAgICBncmFuZFBhcmVudEVsLnJlcGxhY2VDaGlsZChwcm9qZWN0TmFtZUVsLCBpbnB1dEVsKTtcbiAgICAgICAgICAgIHJlc29sdmUoaW5kZXgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZW1vdmUnOlxuICAgICAgICAgIHByb2plY3RzLnJlbW92ZVByb2plY3QoaW5kZXgpO1xuICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICByZXNvbHZlKGluZGV4KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgeyBhZGROZXdQcm9qZWN0LCB1cGRhdGVQcm9qZWN0c0Rpc3BsYXksIHByb2plY3RMaXN0Q2xpY2tIYW5kbGVyIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAqIGFzIGdsb2JhbCBmcm9tICcuL2dsb2JhbENvbnN0YW50cyc7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbi8vIGltcG9ydCB1cGRhdGVUYXNrc0Rpc3BsYXkgZnJvbSAnLi91cGRhdGVUYXNrc0Rpc3BsYXknO1xuXG4vLyBGdW5jdGlvbiBmb3IgYWRkaW5nIGEgbmV3IHRhc2tcbmNvbnN0IGFkZE5ld1Rhc2sgPSAocHJvamVjdHMsIGFjdGl2ZVByb2plY3QsIHNob3dWaWV3KSA9PiB7XG4gIC8vIENyZWF0ZSBhIG5ldyB0YXNrIGVsZW1lbnRcbiAgY29uc3QgdGFza0VsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWyduZXctdGFzayddLCB7fSwgJycpO1xuXG4gIC8vIENyZWF0ZSBlYWNoIHBhcnQgb2YgYSB0YXNrIGVsZWxtZW50XG4gIGNvbnN0IGZvY3VzRWwgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIFtdLCB7IHR5cGU6ICdjaGVja2JveCcgfSwgJycpO1xuICB0YXNrRWwuYXBwZW5kQ2hpbGQoZm9jdXNFbCk7XG5cbiAgY29uc3Qgc3RhdHVzRWwgPSBjcmVhdGVFbGVtZW50KCdzZWxlY3QnLCBbXSwge30sICcnKTtcbiAgY29uc3Qgc3RhdHVzVG9Eb0VsID0gY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgW10sIHt9LCAnVG8gZG8nKTtcbiAgc3RhdHVzRWwuYXBwZW5kQ2hpbGQoc3RhdHVzVG9Eb0VsKTtcbiAgY29uc3Qgc3RhdHVzRG9pbmdFbCA9IGNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIFtdLCB7fSwgJ0RvaW5nJyk7XG4gIHN0YXR1c0VsLmFwcGVuZENoaWxkKHN0YXR1c0RvaW5nRWwpO1xuICBjb25zdCBzdGF0dXNXYWl0RWwgPSBjcmVhdGVFbGVtZW50KCdvcHRpb24nLCBbXSwge30sICdXYWl0aW5nJyk7XG4gIHN0YXR1c0VsLmFwcGVuZENoaWxkKHN0YXR1c1dhaXRFbCk7XG4gIGNvbnN0IHN0YXR1c0RvbmVFbCA9IGNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIFtdLCB7fSwgJ0RvbmUnKTtcbiAgc3RhdHVzRWwuYXBwZW5kQ2hpbGQoc3RhdHVzRG9uZUVsKTtcbiAgdGFza0VsLmFwcGVuZENoaWxkKHN0YXR1c0VsKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkVsID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBbXSwge30sICcnKTtcbiAgdGFza0VsLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWwpO1xuXG4gIGNvbnN0IHByb2plY3RFbCA9IGNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcsIFtdLCB7fSwgJycpO1xuICBpZiAoc2hvd1ZpZXcpIHtcbiAgICBwcm9qZWN0cy5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25FbCA9IGNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIFtdLCB7fSwgcHJvamVjdC5uYW1lKTtcbiAgICAgIHByb2plY3RFbC5hcHBlbmRDaGlsZChvcHRpb25FbCk7XG4gICAgfSk7XG4gICAgdGFza0VsLmFwcGVuZENoaWxkKHByb2plY3RFbCk7XG4gICAgdGFza0VsLmNsYXNzTGlzdC5yZW1vdmUoJ25ldy10YXNrJyk7XG4gICAgdGFza0VsLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLXdpdGgtcHJvamVjdCcpO1xuICB9XG5cbiAgY29uc3Qgc3RhcnREYXRlRWwgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIFtdLCB7IHR5cGU6ICdkYXRlJyB9LCAnJyk7XG4gIHRhc2tFbC5hcHBlbmRDaGlsZChzdGFydERhdGVFbCk7XG5cbiAgY29uc3QgZHVlRGF0ZUVsID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBbXSwgeyB0eXBlOiAnZGF0ZScgfSwgJycpO1xuICB0YXNrRWwuYXBwZW5kQ2hpbGQoZHVlRGF0ZUVsKTtcblxuICAvLyBNYWtlIHBsYWNlaG9sZGVycyBzbyB0aGUgU3VibWl0IGJ1dHRvbiBzaG93cyB1cCBhdCB0aGUgZW5kXG4gIGNvbnN0IHNraXAgPSBzaG93VmlldyA/IDUgOiA0O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNraXA7IGkrKykge1xuICAgIHRhc2tFbC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCBbXSwge30sICcnKSk7XG4gIH1cbiAgY29uc3Qgc3VibWl0QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgW10sIHt9LCAnU3VibWl0Jyk7XG4gIHRhc2tFbC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gIC8vIEF0dGFjaCB0aGUgbmV3IHRhc2sgZWxlbWVudCB0byB0aGUgdGFza3NMaXN0IGVsZW1lbnRcbiAgZ2xvYmFsLnRhc2tzTGlzdEVsLmFwcGVuZENoaWxkKHRhc2tFbCk7XG5cbiAgLy8gRm9jdXMgb24gdGhlIGRlc2NyaXB0aW9uIHNvIHRoZSB1c2VyIGNhbiBzdGFydCBlbnRlcmluZyB0ZXh0XG4gIGRlc2NyaXB0aW9uRWwuZm9jdXMoKTtcblxuICAvLyBXYWl0IGZvciB0aGUgc3VibWl0IGJ1dHRvbiB0byBiZSBjbGlja2VkIG9uXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9XG4gICAgICAgIHNob3dWaWV3ID09PSB0cnVlXG4gICAgICAgICAgPyBwcm9qZWN0RWwuc2VsZWN0ZWRJbmRleFxuICAgICAgICAgIDogcHJvamVjdHMucHJvamVjdHMuaW5kZXhPZihhY3RpdmVQcm9qZWN0KTtcbiAgICAgIGNvbnN0IHRhc2sgPSBUYXNrKFxuICAgICAgICBmb2N1c0VsLmNoZWNrZWQsXG4gICAgICAgIC8vIHN0YXR1cyBpcyBmcm9tIGFycmF5IFsnVG9kbycsICdEb2luZycsICdXYWl0JywgJ0RvbmUnXVxuICAgICAgICBnbG9iYWwuc3RhdHVzW3N0YXR1c0VsLnNlbGVjdGVkSW5kZXhdLFxuICAgICAgICBkZXNjcmlwdGlvbkVsLnZhbHVlLFxuICAgICAgICBzdGFydERhdGVFbC52YWx1ZSxcbiAgICAgICAgZHVlRGF0ZUVsLnZhbHVlLFxuICAgICAgICBwcm9qZWN0SW5kZXgsXG4gICAgICAgIHByb2plY3RzLnByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3MubGVuZ3RoXG4gICAgICApO1xuXG4gICAgICBwcm9qZWN0cy5hZGRUYXNrVG9Qcm9qZWN0KHRhc2ssIHByb2plY3RzLnByb2plY3RzW3Byb2plY3RJbmRleF0pO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8vIEhhbmRsZXMgYSB2YWxpZCBjbGljayBvbiB0aGUgdGFza3MgbGlzdFxuY29uc3QgdGFza0xpc3RDbGlja0hhbmRsZXIgPSAocm93LCBjb2wsIHByb2plY3RzLCBhY3RpdmVQcm9qZWN0LCBzaG93VmlldykgPT4ge1xuICBjb25zb2xlLmxvZyhcbiAgICAn8J+agCB+IGZpbGU6IGRvbS10YXNrcy5qczoxNTYgfiB0YXNrTGlzdENsaWNrSGFuZGxlciB+IHJvdywgY29sOicsXG4gICAgcm93LFxuICAgIGNvbFxuICApO1xuICBjb25zdCB0YXNrRWwgPSBnbG9iYWwudGFza3NMaXN0RWwuY2hpbGRyZW5bcm93XTtcbiAgY29uc29sZS5sb2coXG4gICAgJ/CfmoAgfiBmaWxlOiBkb20tdGFza3MuanM6NzUgfiB0YXNrTGlzdENsaWNrSGFuZGxlciB+IGdsb2JhbC50YXNrc0xpc3RFbDonLFxuICAgIGdsb2JhbC50YXNrc0xpc3RFbFxuICApO1xuICBjb25zb2xlLmxvZyhcbiAgICAn8J+agCB+IGZpbGU6IGRvbS10YXNrcy5qczoxNTcgfiB0YXNrTGlzdENsaWNrSGFuZGxlciB+IHRhc2tFbDonLFxuICAgIHRhc2tFbFxuICApO1xuICB0YXNrRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhc2snKTtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gdGFza0VsLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0SW5kZXgnKTtcbiAgY29uc29sZS5sb2coXG4gICAgJ/CfmoAgfiBmaWxlOiBkb20tdGFza3MuanM6ODIgfiB0YXNrTGlzdENsaWNrSGFuZGxlciB+IHByb2plY3RJbmRleDonLFxuICAgIHByb2plY3RJbmRleFxuICApO1xuICBjb25zdCB0YXNrSW5kZXggPSB0YXNrRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJbmRleCcpO1xuICBjb25zb2xlLmxvZyhcbiAgICAn8J+agCB+IGZpbGU6IGRvbS10YXNrcy5qczo4NCB+IHRhc2tMaXN0Q2xpY2tIYW5kbGVyIH4gdGFza0luZGV4OicsXG4gICAgdGFza0luZGV4XG4gICk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgZWRpdGluZ1Rhc2tFbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnZWRpdGluZy10YXNrJ10sIHt9LCAnJyk7XG5cbiAgICAvLyBGb2N1cyBidXR0b25cbiAgICBjb25zdCBmb2N1c0ljb24gPSB0YXNrRWwuY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xuICAgIGNvbnN0IGZvY3VzRWwgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBbJ2ZvY3VzLWJ0biddLCB7fSwgZm9jdXNJY29uKTtcbiAgICBlZGl0aW5nVGFza0VsLmFwcGVuZENoaWxkKGZvY3VzRWwpO1xuXG4gICAgLy8gU3RhdHVzIHB1bGwgZG93blxuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBOdW1iZXIodGFza0VsLmNoaWxkcmVuWzFdLmRhdGFzZXQuc3RhdHVzaW5kZXgpO1xuXG4gICAgY29uc3Qgc3RhdHVzRWwgPSBjcmVhdGVFbGVtZW50KCdzZWxlY3QnLCBbXSwge30sICcnKTtcbiAgICAvLyBPcHRpb24gaXMgZnJvbSB0aGUgc3RhdHVzSWNvbnMgZGljdGlvbmFyeVxuICAgIGNvbnN0IHN0YXR1c1RvRG9FbCA9IGNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIFtdLCB7fSwgJ1RvIGRvJyk7XG4gICAgaWYgKHNlbGVjdGVkSW5kZXggPT09IDApIHN0YXR1c1RvRG9FbC5zZWxlY3RlZCA9IHRydWU7XG4gICAgc3RhdHVzRWwuYXBwZW5kQ2hpbGQoc3RhdHVzVG9Eb0VsKTtcbiAgICBjb25zdCBzdGF0dXNEb2luZ0VsID0gY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgW10sIHt9LCAnRG9pbmcnKTtcbiAgICBpZiAoc2VsZWN0ZWRJbmRleCA9PT0gMSkgc3RhdHVzRG9pbmdFbC5zZWxlY3RlZCA9IHRydWU7XG4gICAgc3RhdHVzRWwuYXBwZW5kQ2hpbGQoc3RhdHVzRG9pbmdFbCk7XG4gICAgY29uc3Qgc3RhdHVzV2FpdEVsID0gY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgW10sIHt9LCAnV2FpdGluZycpO1xuICAgIGlmIChzZWxlY3RlZEluZGV4ID09PSAyKSBzdGF0dXNXYWl0RWwuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIHN0YXR1c0VsLmFwcGVuZENoaWxkKHN0YXR1c1dhaXRFbCk7XG4gICAgY29uc3Qgc3RhdHVzRG9uZUVsID0gY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgW10sIHt9LCAnRG9uZScpO1xuICAgIGlmIChzZWxlY3RlZEluZGV4ID09PSAzKSBzdGF0dXNEb25lRWwuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIHN0YXR1c0VsLmFwcGVuZENoaWxkKHN0YXR1c0RvbmVFbCk7XG4gICAgZWRpdGluZ1Rhc2tFbC5hcHBlbmRDaGlsZChzdGF0dXNFbCk7XG5cbiAgICAvLyBEZXNjcmlwdGlvbiB0ZXh0IGlucHV0XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0YXNrRWwuY2hpbGRyZW5bMl0uaW5uZXJUZXh0O1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uRWwgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgJ2lucHV0JyxcbiAgICAgIFtdLFxuICAgICAgeyB2YWx1ZTogZGVzY3JpcHRpb24gfSxcbiAgICAgICcnXG4gICAgKTtcbiAgICBlZGl0aW5nVGFza0VsLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWwpO1xuXG4gICAgLy8gU3RhcnREYXRlIGRhdGUgaW5wdXRcbiAgICBjb25zdCBzdGFydERhdGVFbCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAnaW5wdXQnLFxuICAgICAgW10sXG4gICAgICB7IHR5cGU6ICdkYXRlJywgdmFsdWU6IHRhc2tFbC5jaGlsZHJlblszXS5pbm5lclRleHQgfSxcbiAgICAgICcnXG4gICAgKTtcbiAgICBlZGl0aW5nVGFza0VsLmFwcGVuZENoaWxkKHN0YXJ0RGF0ZUVsKTtcblxuICAgIC8vIFVwZGF0ZSBkdWVEYXRlXG4gICAgY29uc3QgZHVlRGF0ZUVsID0gY3JlYXRlRWxlbWVudChcbiAgICAgICdpbnB1dCcsXG4gICAgICBbXSxcbiAgICAgIHsgdHlwZTogJ2RhdGUnLCB2YWx1ZTogdGFza0VsLmNoaWxkcmVuWzRdLmlubmVyVGV4dCB9LFxuICAgICAgJydcbiAgICApO1xuICAgIGVkaXRpbmdUYXNrRWwuYXBwZW5kQ2hpbGQoZHVlRGF0ZUVsKTtcblxuICAgIC8vIFBsYWNlIGhvbGRlcnNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgLy8gbWFrZSBzdXJlIG5vdCB0byB1c2UgJ2RpdicgaGVyZSBkdWUgdG8gYSBjaGVjayBpbiBzY3JlZW5Db250cm9sbGVyKClcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdwJywgW10sIHt9LCAnJyk7XG4gICAgICBlZGl0aW5nVGFza0VsLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIFRoZSBwcm9qZWN0IGxpc3QgZHJvcCBkb3duXG4gICAgY29uc3QgcHJvamVjdERyb3BEb3duRWwgPSBjcmVhdGVFbGVtZW50KCdzZWxlY3QnLCBbXSwge30sICcnKTtcbiAgICAvLyBPcHRpb25zIGFyZSBwcm9qZWN0IG5hbWVzXG4gICAgcHJvamVjdHMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEVsID0gY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgW10sIHt9LCBwcm9qZWN0Lm5hbWUpO1xuICAgICAgaWYgKHByb2plY3QgPT09IGFjdGl2ZVByb2plY3QpIHtcbiAgICAgICAgcHJvamVjdEVsLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHByb2plY3REcm9wRG93bkVsLmFwcGVuZENoaWxkKHByb2plY3RFbCk7XG4gICAgfSk7XG5cbiAgICBlZGl0aW5nVGFza0VsLmFwcGVuZENoaWxkKHByb2plY3REcm9wRG93bkVsKTtcblxuICAgIC8vIFRoZSBkZWxldGUgYnV0dG9uXG4gICAgY29uc3QgZGVsQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgWydkZWxldGUtYnRuJ10sIHt9LCAn4p2MJyk7XG4gICAgZWRpdGluZ1Rhc2tFbC5hcHBlbmRDaGlsZChkZWxCdG4pO1xuXG4gICAgY29uc3QgdGhpc1Byb2plY3QgPVxuICAgICAgc2hvd1ZpZXcgPT09IHRydWUgPyBwcm9qZWN0cy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdIDogYWN0aXZlUHJvamVjdDtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICfwn5qAIH4gZmlsZTogZG9tLXRhc2tzLmpzOjIyNSB+IHJldHVybm5ld1Byb21pc2UgfiB0aGlzUHJvamVjdDonLFxuICAgICAgdGhpc1Byb2plY3RcbiAgICApO1xuICAgIGdsb2JhbC50YXNrc0xpc3RFbC5yZXBsYWNlQ2hpbGQoZWRpdGluZ1Rhc2tFbCwgdGFza0VsKTtcblxuICAgIGZvY3VzRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAvLyBUb2dnbGUgZm9jdXMgaWNvblxuICAgICAgbGV0IHZhbHVlID0gZm9jdXNJY29uID09PSAn8J+rpScgPyB0cnVlIDogZmFsc2U7XG4gICAgICBwcm9qZWN0cy51cGRhdGVUYXNraW5Qcm9qZWN0KHRoaXNQcm9qZWN0LCB0YXNrSW5kZXgsICdmb2N1cycsIHZhbHVlKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcblxuICAgIHN0YXR1c0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHByb2plY3RzLnVwZGF0ZVRhc2tpblByb2plY3QoXG4gICAgICAgIHRoaXNQcm9qZWN0LFxuICAgICAgICB0YXNrSW5kZXgsXG4gICAgICAgICdzdGF0dXMnLFxuICAgICAgICBnbG9iYWwuc3RhdHVzW3N0YXR1c0VsLnNlbGVjdGVkSW5kZXhdXG4gICAgICApO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpcHRpb25FbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0cy51cGRhdGVUYXNraW5Qcm9qZWN0KFxuICAgICAgICB0aGlzUHJvamVjdCxcbiAgICAgICAgdGFza0luZGV4LFxuICAgICAgICAnZGVzY3JpcHRpb24nLFxuICAgICAgICBkZXNjcmlwdGlvbkVsLnZhbHVlXG4gICAgICApO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gVXNlIGJsdXIgaW5zdGVhZCBvZiBjaGFuZ2UsIHNvIGl0IGRvZXMgbm90IGZpcmUgdG9vIHNvb25cbiAgICBzdGFydERhdGVFbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgcHJvamVjdHMudXBkYXRlVGFza2luUHJvamVjdChcbiAgICAgICAgdGhpc1Byb2plY3QsXG4gICAgICAgIHRhc2tJbmRleCxcbiAgICAgICAgJ3N0YXJ0RGF0ZScsXG4gICAgICAgIHN0YXJ0RGF0ZUVsLnZhbHVlXG4gICAgICApO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gVXNlIGJsdXIgaW5zdGVhZCBvZiBjaGFuZ2UsIHNvIGl0IGRvZXMgbm90IGZpcmUgdG9vIHNvb25cbiAgICBkdWVEYXRlRWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgIHByb2plY3RzLnVwZGF0ZVRhc2tpblByb2plY3QoXG4gICAgICAgIHRoaXNQcm9qZWN0LFxuICAgICAgICB0YXNrSW5kZXgsXG4gICAgICAgICdkdWVEYXRlJyxcbiAgICAgICAgZHVlRGF0ZUVsLnZhbHVlXG4gICAgICApO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdERyb3BEb3duRWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICfwn5qAIH4gZmlsZTogZG9tLXRhc2tzLmpzOjI5MCB+IHByb2plY3REcm9wRG93bkVsLmFkZEV2ZW50TGlzdGVuZXIgfiBwcm9qZWN0RHJvcERvd25FbC5zZWxlY3RlZEluZGV4OicsXG4gICAgICAgIHByb2plY3REcm9wRG93bkVsLnNlbGVjdGVkSW5kZXhcbiAgICAgICk7XG4gICAgICBwcm9qZWN0cy51cGRhdGVUYXNraW5Qcm9qZWN0KFxuICAgICAgICB0aGlzUHJvamVjdCxcbiAgICAgICAgdGFza0luZGV4LFxuICAgICAgICAncHJvamVjdEluZGV4JyxcbiAgICAgICAgcHJvamVjdERyb3BEb3duRWwuc2VsZWN0ZWRJbmRleFxuICAgICAgKTtcblxuICAgICAgcHJvamVjdHMubW92ZVRhc2t0b1Byb2plY3QoXG4gICAgICAgIHRoaXNQcm9qZWN0LFxuICAgICAgICB0YXNrSW5kZXgsXG4gICAgICAgIHByb2plY3RzLnByb2plY3RzW3Byb2plY3REcm9wRG93bkVsLnNlbGVjdGVkSW5kZXhdXG4gICAgICApO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuXG4gICAgZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgLy8gQ2FsbCBmcm9tIHByb2plY3RzIHRvIGRlbGV0ZSB0aGUgdGFza1xuICAgICAgLy8gc28gdGhhdCB0aGUgbG9jYWwgc3RvcmFnZSBpcyB1cGRhdGVkIGFmdGVyIHRoZSBkZWxldGlvblxuICAgICAgcHJvamVjdHMuZGVsZXRlVGFza0Zyb21Qcm9qZWN0KHRhc2tJbmRleCwgdGhpc1Byb2plY3QpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGFkZE5ld1Rhc2ssIHRhc2tMaXN0Q2xpY2tIYW5kbGVyIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5uZWVkZWQtdGVybmFyeSAqL1xuLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0ICogYXMgZ2xvYmFsIGZyb20gJy4vZ2xvYmFsQ29uc3RhbnRzJztcbmltcG9ydCBpc0JlZm9yZSBmcm9tICcuL3V0aWxzJztcblxubGV0IGZvY3VzQXNjZW5kID0gdHJ1ZTtcbmxldCBzdGF0dXNBc2NlbmQgPSB0cnVlO1xubGV0IGRlc2NyaXB0aW9uQXNjZW5kID0gdHJ1ZTtcbmxldCBwcm9qZWN0QXNjZW5kID0gdHJ1ZTtcbmxldCBzdGFydERhdGVBc2NlbmQgPSB0cnVlO1xubGV0IGR1ZURhdGVBc2NlbmQgPSB0cnVlO1xuXG5jb25zdCBnZXRMaXN0ID0gKGFjdGl2ZVByb2plY3QsIHNob3dQcm9qZWN0KSA9PiB7XG4gIGlmIChzaG93UHJvamVjdCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0JykpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhY3RpdmVQcm9qZWN0LnRhc2tzO1xuICB9XG59O1xuXG5jb25zdCBzb3J0QnlLZXkgPSAoYXJyYXksIGtleSwgc29ydEFzY2VuZCkgPT4ge1xuICByZXR1cm4gYXJyYXkuc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChzb3J0QXNjZW5kKSB7XG4gICAgICByZXR1cm4gYVtrZXldIDwgYltrZXldID8gLTEgOiAxO1xuICAgIH1cbiAgICByZXR1cm4gYVtrZXldID4gYltrZXldID8gLTEgOiAxO1xuICB9KTtcbn07XG5cbmNvbnN0IHVwZGF0ZVRhc2tzTGlzdEhlYWRlciA9IChwcm9qZWN0cywgYWN0aXZlUHJvamVjdCwgc2hvd1Byb2plY3QpID0+IHtcbiAgLy8gRGlzcGxheSB0aGUgdGFza3MgbGlzdCBoZWFkZXJcbiAgY29uc3QgdGFza0xpc3RIZWFkZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1saXN0LWhlYWRlcicpO1xuICB0YXNrTGlzdEhlYWRlckVsLmlubmVySFRNTCA9ICcnO1xuICBpZiAoc2hvd1Byb2plY3QpIHtcbiAgICB0YXNrTGlzdEhlYWRlckVsLmNsYXNzTGlzdC5yZW1vdmUoJ25vdC1zaG93LXByb2plY3QtbmFtZScpO1xuICAgIHRhc2tMaXN0SGVhZGVyRWwuY2xhc3NMaXN0LmFkZCgnc2hvdy1wcm9qZWN0LW5hbWUnKTtcbiAgfSBlbHNlIHtcbiAgICB0YXNrTGlzdEhlYWRlckVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctcHJvamVjdC1uYW1lJyk7XG4gICAgdGFza0xpc3RIZWFkZXJFbC5jbGFzc0xpc3QuYWRkKCdub3Qtc2hvdy1wcm9qZWN0LW5hbWUnKTtcbiAgfVxuXG4gIGNvbnN0IHNvcnRCeUZvY3VzQnRuID0gY3JlYXRlRWxlbWVudChcbiAgICAnYnRuJyxcbiAgICBbXSxcbiAgICB7IHN0eWxlOiAnY3Vyc29yOiBwb2ludGVyOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcicgfSxcbiAgICAn4oaV77iPJ1xuICApO1xuICB0YXNrTGlzdEhlYWRlckVsLmFwcGVuZENoaWxkKHNvcnRCeUZvY3VzQnRuKTtcbiAgc29ydEJ5Rm9jdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGdldExpc3QoYWN0aXZlUHJvamVjdCwgc2hvd1Byb2plY3QpO1xuICAgIGZvY3VzQXNjZW5kID0gZm9jdXNBc2NlbmQgPyBmYWxzZSA6IHRydWU7XG4gICAgY29uc3Qgc29ydGVkTGlzdCA9IHNvcnRCeUtleShsaXN0LCAnZm9jdXMnLCBmb2N1c0FzY2VuZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3QnLCBKU09OLnN0cmluZ2lmeShzb3J0ZWRMaXN0KSk7XG4gICAgdXBkYXRlVGFza3NEaXNwbGF5KHByb2plY3RzLCBzb3J0ZWRMaXN0LCBzaG93UHJvamVjdCwgZmFsc2UpO1xuICB9KTtcblxuICBjb25zdCBzb3J0QnlTdGF0dXNCdG4gPSBjcmVhdGVFbGVtZW50KFxuICAgICdidG4nLFxuICAgIFtdLFxuICAgIHsgc3R5bGU6ICdjdXJzb3I6IHBvaW50ZXI7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyJyB9LFxuICAgICfihpXvuI8nXG4gICk7XG4gIHRhc2tMaXN0SGVhZGVyRWwuYXBwZW5kQ2hpbGQoc29ydEJ5U3RhdHVzQnRuKTtcbiAgc29ydEJ5U3RhdHVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBnZXRMaXN0KGFjdGl2ZVByb2plY3QsIHNob3dQcm9qZWN0KTtcbiAgICBzdGF0dXNBc2NlbmQgPSBzdGF0dXNBc2NlbmQgPyBmYWxzZSA6IHRydWU7XG4gICAgY29uc3Qgc29ydGVkTGlzdCA9IHNvcnRCeUtleShsaXN0LCAnc3RhdHVzJywgc3RhdHVzQXNjZW5kKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdCcsIEpTT04uc3RyaW5naWZ5KHNvcnRlZExpc3QpKTtcbiAgICB1cGRhdGVUYXNrc0Rpc3BsYXkocHJvamVjdHMsIHNvcnRlZExpc3QsIHNob3dQcm9qZWN0LCBmYWxzZSk7XG4gIH0pO1xuXG4gIGNvbnN0IGhlYWRlckRlc2NyaXB0aW9uRWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbXSwge30sICdEZXNjcmlwdGlvbiAnKTtcbiAgdGFza0xpc3RIZWFkZXJFbC5hcHBlbmRDaGlsZChoZWFkZXJEZXNjcmlwdGlvbkVsKTtcbiAgY29uc3Qgc29ydEJ5RGVzY3JpcHRpb25CdG4gPSBjcmVhdGVFbGVtZW50KFxuICAgICdidG4nLFxuICAgIFtdLFxuICAgIHsgc3R5bGU6ICdjdXJzb3I6IHBvaW50ZXInIH0sXG4gICAgJ+KGle+4jydcbiAgKTtcbiAgaGVhZGVyRGVzY3JpcHRpb25FbC5hcHBlbmRDaGlsZChzb3J0QnlEZXNjcmlwdGlvbkJ0bik7XG4gIHNvcnRCeURlc2NyaXB0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBnZXRMaXN0KGFjdGl2ZVByb2plY3QsIHNob3dQcm9qZWN0KTtcbiAgICBkZXNjcmlwdGlvbkFzY2VuZCA9IGRlc2NyaXB0aW9uQXNjZW5kID8gZmFsc2UgOiB0cnVlO1xuICAgIGNvbnN0IHNvcnRlZExpc3QgPSBzb3J0QnlLZXkobGlzdCwgJ2Rlc2NyaXB0aW9uJywgZGVzY3JpcHRpb25Bc2NlbmQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkoc29ydGVkTGlzdCkpO1xuICAgIHVwZGF0ZVRhc2tzRGlzcGxheShwcm9qZWN0cywgc29ydGVkTGlzdCwgc2hvd1Byb2plY3QsIGZhbHNlKTtcbiAgfSk7XG5cbiAgaWYgKHNob3dQcm9qZWN0KSB7XG4gICAgdGFza0xpc3RIZWFkZXJFbC5jbGFzc0xpc3QucmVtb3ZlKCdub3Qtc2hvdy1wcm9qZWN0LW5hbWUnKTtcbiAgICB0YXNrTGlzdEhlYWRlckVsLmNsYXNzTGlzdC5hZGQoJ3Nob3ctcHJvamVjdC1uYW1lJyk7XG4gICAgY29uc3QgaGVhZGVyUHJvamVjdE5hbWVFbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFtdLCB7fSwgJ1Byb2plY3QgJyk7XG4gICAgdGFza0xpc3RIZWFkZXJFbC5hcHBlbmRDaGlsZChoZWFkZXJQcm9qZWN0TmFtZUVsKTtcbiAgICBjb25zdCBzb3J0QnlQcm9qZWN0QnRuID0gY3JlYXRlRWxlbWVudChcbiAgICAgICdidG4nLFxuICAgICAgW10sXG4gICAgICB7IHN0eWxlOiAnY3Vyc29yOiBwb2ludGVyJyB9LFxuICAgICAgJ+KGle+4jydcbiAgICApO1xuICAgIGhlYWRlclByb2plY3ROYW1lRWwuYXBwZW5kQ2hpbGQoc29ydEJ5UHJvamVjdEJ0bik7XG4gICAgc29ydEJ5UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGxpc3QgPSBnZXRMaXN0KGFjdGl2ZVByb2plY3QsIHNob3dQcm9qZWN0KTtcbiAgICAgIHByb2plY3RBc2NlbmQgPSBwcm9qZWN0QXNjZW5kID8gZmFsc2UgOiB0cnVlO1xuICAgICAgLy8gVG9kbzogc2hvdWxkIHNvcnQgYnkgcHJvamVjdCBuYW1lLCBub3QgcHJvamVjdCBpbmRleFxuICAgICAgY29uc3Qgc29ydGVkTGlzdCA9IHNvcnRCeUtleShsaXN0LCAncHJvamVjdEluZGV4JywgcHJvamVjdEFzY2VuZCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdCcsIEpTT04uc3RyaW5naWZ5KHNvcnRlZExpc3QpKTtcbiAgICAgIHVwZGF0ZVRhc2tzRGlzcGxheShwcm9qZWN0cywgc29ydGVkTGlzdCwgc2hvd1Byb2plY3QsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGhlYWRlclN0YXJ0RGF0ZUVsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgW10sIHt9LCAnU3RhcnQgRGF0ZSAnKTtcbiAgdGFza0xpc3RIZWFkZXJFbC5hcHBlbmRDaGlsZChoZWFkZXJTdGFydERhdGVFbCk7XG4gIGNvbnN0IHNvcnRCeVN0YXJ0RGF0ZUJ0biA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgJ2J0bicsXG4gICAgW10sXG4gICAgeyBzdHlsZTogJ2N1cnNvcjogcG9pbnRlcicgfSxcbiAgICAn4oaV77iPJ1xuICApO1xuICBoZWFkZXJTdGFydERhdGVFbC5hcHBlbmRDaGlsZChzb3J0QnlTdGFydERhdGVCdG4pO1xuICBzb3J0QnlTdGFydERhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGdldExpc3QoYWN0aXZlUHJvamVjdCwgc2hvd1Byb2plY3QpO1xuICAgIHN0YXJ0RGF0ZUFzY2VuZCA9IHN0YXJ0RGF0ZUFzY2VuZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICBjb25zdCBzb3J0ZWRMaXN0ID0gc29ydEJ5S2V5KGxpc3QsICdzdGFydERhdGUnLCBzdGFydERhdGVBc2NlbmQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkoc29ydGVkTGlzdCkpO1xuICAgIHVwZGF0ZVRhc2tzRGlzcGxheShwcm9qZWN0cywgc29ydGVkTGlzdCwgc2hvd1Byb2plY3QsIGZhbHNlKTtcbiAgfSk7XG5cbiAgY29uc3QgaGVhZGVyRHVlRGF0ZUVsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgW10sIHt9LCAnRHVlIERhdGUgJyk7XG4gIHRhc2tMaXN0SGVhZGVyRWwuYXBwZW5kQ2hpbGQoaGVhZGVyRHVlRGF0ZUVsKTtcbiAgY29uc3Qgc29ydEJ5RHVlRGF0ZUJ0biA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgJ2J0bicsXG4gICAgW10sXG4gICAgeyBzdHlsZTogJ2N1cnNvcjogcG9pbnRlcicgfSxcbiAgICAn4oaV77iPJ1xuICApO1xuICBoZWFkZXJEdWVEYXRlRWwuYXBwZW5kQ2hpbGQoc29ydEJ5RHVlRGF0ZUJ0bik7XG4gIHNvcnRCeUR1ZURhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGdldExpc3QoYWN0aXZlUHJvamVjdCwgc2hvd1Byb2plY3QpO1xuICAgIGR1ZURhdGVBc2NlbmQgPSBkdWVEYXRlQXNjZW5kID8gZmFsc2UgOiB0cnVlO1xuICAgIGNvbnN0IHNvcnRlZExpc3QgPSBzb3J0QnlLZXkobGlzdCwgJ2R1ZURhdGUnLCBkdWVEYXRlQXNjZW5kKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdCcsIEpTT04uc3RyaW5naWZ5KHNvcnRlZExpc3QpKTtcbiAgICB1cGRhdGVUYXNrc0Rpc3BsYXkocHJvamVjdHMsIHNvcnRlZExpc3QsIHNob3dQcm9qZWN0LCBmYWxzZSk7XG4gIH0pO1xufTtcblxuY29uc3QgdXBkYXRlVGFza3NEaXNwbGF5ID0gKHByb2plY3RzLCB0YXNrTGlzdCwgc2hvd1Byb2plY3QsIGNvbXBsZXRlZFZpZXcpID0+IHtcbiAgY29uc3Qgc2hvd0NvbXBsZXRlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Nob3dDb21wbGV0ZWQnKSk7XG4gIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IGRvbS11cGRhdGVUYXNrc0Rpc3BsYXkuanM6MTUyIH4gdXBkYXRlVGFza3NEaXNwbGF5IH4gc2hvd0NvbXBsZXRlZDpcIiwgc2hvd0NvbXBsZXRlZClcblxuICAvLyBEaXNwbGF5IHRoZSB0YXNrcyBsaXN0IGJvZHlcbiAgZ2xvYmFsLnRhc2tzTGlzdEVsLmlubmVySFRNTCA9ICcnO1xuICBsZXQgcm93ID0gMDtcbiAgdGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIC8vIEluIGNhc2Ugb2YgdGhlIENvbXBsZXRlZCB2aWV3LCBzaG93IGNvbXBsZXRlZCB0YXNrcyBhbnl3YXlzXG4gICAgaWYgKCFjb21wbGV0ZWRWaWV3KSB7XG4gICAgICBpZiAoIXNob3dDb21wbGV0ZWQgJiYgdGFzay5zdGF0dXMgPT09ICdkRG9uZScpIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0YXNrRWwgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBbJ3Rhc2snXSxcbiAgICAgIHtcbiAgICAgICAgJ2RhdGEtcHJvamVjdEluZGV4JzogdGFzay5wcm9qZWN0SW5kZXgsXG4gICAgICAgICdkYXRhLXRhc2tJbmRleCc6IHRhc2sudGFza0luZGV4LFxuICAgICAgfSxcbiAgICAgICcnXG4gICAgKTtcbiAgICBpZiAoc2hvd1Byb2plY3QpIHtcbiAgICAgIHRhc2tFbC5jbGFzc0xpc3QuYWRkKCdzaG93LXByb2plY3QtbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrRWwuY2xhc3NMaXN0LmFkZCgnbm90LXNob3ctcHJvamVjdC1uYW1lJyk7XG4gICAgfVxuXG4gICAgbGV0IGNvbCA9IDA7XG4gICAgY29uc3QgdGFza0ZvY3VzRWwgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBbXSxcbiAgICAgIHsgJ2RhdGEtcm93Jzogcm93LCAnZGF0YS1jb2wnOiBjb2wsIHN0eWxlOiAnY29sb3I6IHJlZDsgdGV4dC1hbGlnbjogY2VudGVyJ30sXG4gICAgICAnJ1xuICAgICk7XG4gICAgLy8gaWYgKHRhc2suZm9jdXMpIHtcbiAgICAvLyAgIHRhc2tGb2N1c0VsLmNsYXNzTGlzdC5hZGQoJ21kaScsICdtZGktd2VhdGhlci1zdW5ueScpO1xuICAgIC8vICAgdGFza0ZvY3VzRWwuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgdGFza0ZvY3VzRWwuY2xhc3NMaXN0LmFkZCgnbWRpJywgJ21kaS1ibHVyJyk7XG4gICAgLy8gfVxuICAgIHRhc2tGb2N1c0VsLmlubmVyVGV4dCA9IHRhc2suZm9jdXMgPyAn4oC877iPJyA6ICfwn6ulJztcbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza0ZvY3VzRWwpO1xuXG4gICAgY29sKys7XG4gICAgY29uc3QgdGFza1N0YXR1c0VsID0gY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgWydtZGknLCBnbG9iYWwuc3RhdHVzSWNvbnNbdGFzay5zdGF0dXNdXSxcbiAgICAgIHtcbiAgICAgICAgJ2RhdGEtcm93Jzogcm93LFxuICAgICAgICAnZGF0YS1jb2wnOiBjb2wsXG4gICAgICAgICdkYXRhLXN0YXR1c2luZGV4JzogZ2xvYmFsLnN0YXR1cy5pbmRleE9mKHRhc2suc3RhdHVzKSxcbiAgICAgICAgc3R5bGU6ICd0ZXh0LWFsaWduOiBjZW50ZXInXG4gICAgICB9LFxuICAgICAgJydcbiAgICApO1xuICAgIHRhc2tFbC5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzRWwpO1xuXG4gICAgY29sKys7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uRWwgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBbJ2xpbWl0ZWQtdGV4dCddLFxuICAgICAgeyAnZGF0YS1yb3cnOiByb3csICdkYXRhLWNvbCc6IGNvbCB9LFxuICAgICAgdGFzay5kZXNjcmlwdGlvblxuICAgICk7XG4gICAgaWYgKHRhc2suc3RhdHVzID09PSAnZERvbmUnKSB7XG4gICAgICB0YXNrRGVzY3JpcHRpb25FbC5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgfVxuICAgIHRhc2tFbC5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25FbCk7XG5cbiAgICAvLyBJZiBzaG93aW5nIGEgdmlldywgcmF0aGVyIHRoYW4gYW4gYWN0aXZlIHByb2plY3RcbiAgICBpZiAoc2hvd1Byb2plY3QpIHtcbiAgICAgIGNvbCsrO1xuICAgICAgbGV0IHByb2plY3ROYW1lID0gJ25vdCBhc3NpZ25lZCc7XG4gICAgICBpZiAoIWlzTmFOKE51bWJlcih0YXNrLnByb2plY3RJbmRleCkpKSB7XG4gICAgICAgIHByb2plY3ROYW1lID0gcHJvamVjdHMucHJvamVjdHNbdGFzay5wcm9qZWN0SW5kZXhdLm5hbWU7XG4gICAgICB9XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZUVsID0gY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIFsnbGltaXRlZC10ZXh0J10sXG4gICAgICAgIHsgJ2RhdGEtcm93Jzogcm93LCAnZGF0YS1jb2wnOiBjb2wgfSxcbiAgICAgICAgcHJvamVjdE5hbWVcbiAgICAgICk7XG4gICAgICB0YXNrRWwuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbCk7XG4gICAgfVxuXG4gICAgY29sKys7XG4gICAgY29uc3QgdGFza1N0YXJ0RGF0ZUVsID0gY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgW10sXG4gICAgICB7ICdkYXRhLXJvdyc6IHJvdywgJ2RhdGEtY29sJzogY29sIH0sXG4gICAgICB0YXNrLnN0YXJ0RGF0ZVxuICAgICk7XG4gICAgaWYgKGlzQmVmb3JlKHRhc2suc3RhcnREYXRlLCAwKSkge1xuICAgICAgdGFza1N0YXJ0RGF0ZUVsLmNsYXNzTGlzdC5hZGQoJ2RhdGUtcGFzc2VkJyk7XG4gICAgfVxuICAgIHRhc2tFbC5hcHBlbmRDaGlsZCh0YXNrU3RhcnREYXRlRWwpO1xuXG4gICAgY29sKys7XG4gICAgY29uc3QgdGFza0R1ZURhdGVFbCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIFtdLFxuICAgICAgeyAnZGF0YS1yb3cnOiByb3csICdkYXRhLWNvbCc6IGNvbCB9LFxuICAgICAgdGFzay5kdWVEYXRlXG4gICAgKTtcbiAgICBpZiAoaXNCZWZvcmUodGFzay5kdWVEYXRlLCAwKSkge1xuICAgICAgdGFza0R1ZURhdGVFbC5jbGFzc0xpc3QuYWRkKCdkYXRlLXBhc3NlZCcpO1xuICAgIH1cbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVFbCk7XG4gICAgcm93Kys7XG5cbiAgICBnbG9iYWwudGFza3NMaXN0RWwuYXBwZW5kQ2hpbGQodGFza0VsKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyB1cGRhdGVUYXNrc0xpc3RIZWFkZXIsIHVwZGF0ZVRhc2tzRGlzcGxheSB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7IHVwZGF0ZVRhc2tzRGlzcGxheSB9IGZyb20gJy4vZG9tLXVwZGF0ZVRhc2tzRGlzcGxheSc7XG5pbXBvcnQgaXNCZWZvcmUgIGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCB0b2RheUNsaWNrSGFuZGxlciA9IChwcm9qZWN0cykgPT4ge1xuICBjb25zdCBsaXN0ID0gW107XG4gIHByb2plY3RzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaXNCZWZvcmUodGFzay5zdGFydERhdGUsIDApIHx8IGlzQmVmb3JlKHRhc2suZHVlRGF0ZSwgMCkpIHtcbiAgICAgICAgdGFzay50YXNrSW5kZXggPSBpbmRleDtcbiAgICAgICAgbGlzdC5wdXNoKHRhc2spO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3QnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XG4gIHVwZGF0ZVRhc2tzRGlzcGxheShwcm9qZWN0cywgbGlzdCwgdHJ1ZSk7XG59O1xuXG5jb25zdCBuZXh0N2RheXNDbGlja0hhbmRsZXIgPSAocHJvamVjdHMpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBwcm9qZWN0cy5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGlzQmVmb3JlKHRhc2suc3RhcnREYXRlLCA3KSB8fCBpc0JlZm9yZSh0YXNrLmR1ZURhdGUsIDcpKSB7XG4gICAgICAgIHRhc2sudGFza0luZGV4ID0gaW5kZXg7XG4gICAgICAgIGxpc3QucHVzaCh0YXNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xuICB1cGRhdGVUYXNrc0Rpc3BsYXkocHJvamVjdHMsIGxpc3QsIHRydWUpO1xufTtcblxuY29uc3QgdW5kYXRlZENsaWNrSGFuZGxlciA9IChwcm9qZWN0cykgPT4ge1xuICBjb25zdCBsaXN0ID0gW107XG4gIHByb2plY3RzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICBpZiAoIXRhc2suc3RhcnREYXRlICYmICF0YXNrLmR1ZURhdGUpIHtcbiAgICAgICAgdGFzay50YXNrSW5kZXggPSBpbmRleDtcbiAgICAgICAgbGlzdC5wdXNoKHRhc2spO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3QnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XG4gIHVwZGF0ZVRhc2tzRGlzcGxheShwcm9qZWN0cywgbGlzdCwgdHJ1ZSwgdHJ1ZSk7XG59O1xuXG5jb25zdCBjb21wbGV0ZWRDbGlja0hhbmRsZXIgPSAocHJvamVjdHMpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBwcm9qZWN0cy5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHRhc2suc3RhdHVzID09PSAnZERvbmUnKSB7XG4gICAgICAgIHRhc2sudGFza0luZGV4ID0gaW5kZXg7XG4gICAgICAgIGxpc3QucHVzaCh0YXNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xuICB1cGRhdGVUYXNrc0Rpc3BsYXkocHJvamVjdHMsIGxpc3QsIHRydWUsIHRydWUpO1xufTtcblxuY29uc3QgYWxsVGFza3NDbGlja0hhbmRsZXIgPSAocHJvamVjdHMpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBwcm9qZWN0cy5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgdGFzay50YXNrSW5kZXggPSBpbmRleDtcbiAgICAgIGxpc3QucHVzaCh0YXNrKTtcbiAgICB9KTtcbiAgfSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xuICB1cGRhdGVUYXNrc0Rpc3BsYXkocHJvamVjdHMsIGxpc3QsIHRydWUpO1xufTtcblxuZXhwb3J0IHtcbiAgdG9kYXlDbGlja0hhbmRsZXIsXG4gIG5leHQ3ZGF5c0NsaWNrSGFuZGxlcixcbiAgdW5kYXRlZENsaWNrSGFuZGxlcixcbiAgY29tcGxldGVkQ2xpY2tIYW5kbGVyLFxuICBhbGxUYXNrc0NsaWNrSGFuZGxlcixcbn07XG4iLCIvLyBDb25zdGFudHMgcmVsYXRlZCB0byB0YXNrIHN0YXR1c1xuY29uc3Qgc3RhdHVzID0gWydhVG9kbycsICdiRG9pbmcnLCAnY1dhaXQnLCAnZERvbmUnXTtcbmNvbnN0IHN0YXR1c0ljb25zID0ge1xuICBhVG9kbzogJ21kaS1jaGVja2JveC1ibGFuay1jaXJjbGUtb3V0bGluZScsXG4gIGJEb2luZzogJ21kaS1jaXJjbGUtaGFsZi1mdWxsJyxcbiAgY1dhaXQ6ICdtZGktdGltZXItc2FuZCcsXG4gIGREb25lOiAnbWRpLWNoZWNrYm94LW1hcmtlZC1jaXJjbGUnLFxufTtcblxuLy8gR2xvYmFsIGVsZW1lbnRzIHJlZmVycmVkIHRvIGluIG11bHRpcGxlIGpzIGZpbGVzXG5jb25zdCBwcm9qZWN0TGlzdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpO1xuY29uc3QgdGFza3NMaXN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0Jyk7XG5cbmV4cG9ydCB7IHN0YXR1cywgc3RhdHVzSWNvbnMsIHByb2plY3RMaXN0RWwsIHRhc2tzTGlzdEVsIH07XG4iLCJpbXBvcnQgc2NyZWVuQ29udHJvbGxlciBmcm9tICcuL3NjcmVlbkNvbnRyb2xsZXInO1xuXG5zY3JlZW5Db250cm9sbGVyKCk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuY29uc3QgTGlzdCA9IChuYW1lLCBleGlzdGluZ1Rhc2tzID0gW10pID0+IHtcbiAgY29uc3QgdGFza3MgPSBleGlzdGluZ1Rhc2tzIHx8IFtdO1xuXG4gIGNvbnN0IHByaW50VGFza3MgPSAoKSA9PiB7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc29sZS5sb2codGFzay50aXRsZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgdGFza3MucHVzaCh0YXNrKTtcbiAgICAvLyBwcmludFRhc2tzKCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVGFzayA9IChpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdGFzayBleGlzdHMgaW4gdGhlIGxpc3RcbiAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIC8vIHByaW50VGFza3MoKTtcbiAgfTtcblxuICBjb25zdCBtb3ZlVGFzayA9IChpbmRleCwgbmV3TGlzdCkgPT4ge1xuICAgIG5ld0xpc3QuYWRkVGFzayh0YXNrc1tpbmRleF0pO1xuICAgIHJlbW92ZVRhc2soaW5kZXgpO1xuICAgIC8vIHByaW50VGFza3MoKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUYXNrID0gKGluZGV4LCBhdHRyaWJ1dGUsIHZhbHVlKSA9PiB7XG4gICAgc3dpdGNoIChhdHRyaWJ1dGUpIHtcbiAgICAgIGNhc2UgJ2ZvY3VzJzpcbiAgICAgICAgdGFza3NbaW5kZXhdLmZvY3VzID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RhdHVzJzpcbiAgICAgICAgdGFza3NbaW5kZXhdLnN0YXR1cyA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgdGFza3NbaW5kZXhdLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RhcnREYXRlJzpcbiAgICAgICAgdGFza3NbaW5kZXhdLnN0YXJ0RGF0ZSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2R1ZURhdGUnOlxuICAgICAgICB0YXNrc1tpbmRleF0uZHVlRGF0ZSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Byb2plY3RJbmRleCc6XG4gICAgICAgIHRhc2tzW2luZGV4XS5wcm9qZWN0SW5kZXggPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuICAvLyBjb25zdCByZW5hbWVMaXN0ID0gKG5ld05hbWUpID0+IHtcbiAgLy8gICBuYW1lID0gbmV3TmFtZTtcbiAgLy8gfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIHNldCBuYW1lKG5ld05hbWUpIHtcbiAgICAgIG5hbWUgPSBuZXdOYW1lO1xuICAgIH0sXG4gICAgZ2V0IHRhc2tzKCkge1xuICAgICAgcmV0dXJuIHRhc2tzO1xuICAgIH0sXG4gICAgYWRkVGFzayxcbiAgICB1cGRhdGVUYXNrLFxuICAgIHJlbW92ZVRhc2ssXG4gICAgbW92ZVRhc2ssXG4gICAgcHJpbnRUYXNrcyxcbiAgICAvLyByZW5hbWVMaXN0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnO1xuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcbiAgLy8gQSBsaXN0IG9mIHByb2plY3RzIHRoYXQgd2lsbCBlYWNoIGNvbnRhaW4gYSBsaXN0IG9mIHRhc2tzXG4gIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgY29uc3Qgc2F2ZVByb2plY3RzID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0cyA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKTtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSBuZXcgcHJvamVjdFxuICBjb25zdCBhZGRQcm9qZWN0ID0gKG5hbWUsIGRhdGEpID0+IHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBMaXN0KG5hbWUpO1xuICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvamVjdCA9IExpc3QobmFtZSwgZGF0YSk7XG4gICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cbiAgICBzYXZlUHJvamVjdHMoKTtcbiAgfTtcblxuICAvLyBBc3NpZ24gYSB0YXNrIHRvIGEgcGFydGljdWxhciBwcm9qZWN0XG4gIGNvbnN0IGFkZFRhc2tUb1Byb2plY3QgPSAodGFzaywgcHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QuYWRkVGFzayh0YXNrKTtcbiAgICBzYXZlUHJvamVjdHMoKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrRnJvbVByb2plY3QgPSAoaW5kZXgsIHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LnJlbW92ZVRhc2soaW5kZXgpO1xuICAgIHNhdmVQcm9qZWN0cygpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRhc2tpblByb2plY3QgPSAocHJvamVjdCwgaW5kZXgsIGF0dHJpYnV0ZSwgdmFsdWUpID0+IHtcbiAgICBwcm9qZWN0LnVwZGF0ZVRhc2soaW5kZXgsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgIHNhdmVQcm9qZWN0cygpO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVUYXNrdG9Qcm9qZWN0ID0gKHByb2plY3QsIGluZGV4LCBvdGhlclByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0Lm1vdmVUYXNrKGluZGV4LCBvdGhlclByb2plY3QpO1xuICAgIHNhdmVQcm9qZWN0cygpO1xuICB9O1xuXG4gIC8vIFN3YXAgdGhlIG9yZGVyIG9mIDIgcHJvamVjdHNcbiAgY29uc3Qgc3dhcFByb2plY3QgPSAoeCwgeSkgPT4ge1xuICAgIFtwcm9qZWN0c1t4XSwgcHJvamVjdHNbeV1dID0gW3Byb2plY3RzW3ldLCBwcm9qZWN0c1t4XV07XG4gICAgc2F2ZVByb2plY3RzKCk7XG4gIH07XG5cbiAgLy8gQ2hhbmdlIHRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0XG4gIGNvbnN0IHJlbmFtZVByb2plY3QgPSAocHJvamVjdCwgbmV3TmFtZSkgPT4ge1xuICAgIHByb2plY3QubmFtZSA9IG5ld05hbWU7XG4gICAgc2F2ZVByb2plY3RzKCk7XG4gIH07XG5cbiAgLy8gUmVtb3ZlIGEgbmV3IHByb2plY3RcbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2F2ZVByb2plY3RzKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRQcm9qZWN0LFxuICAgIGFkZFRhc2tUb1Byb2plY3QsXG4gICAgZGVsZXRlVGFza0Zyb21Qcm9qZWN0LFxuICAgIHVwZGF0ZVRhc2tpblByb2plY3QsXG4gICAgbW92ZVRhc2t0b1Byb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBzd2FwUHJvamVjdCxcbiAgICBzYXZlUHJvamVjdHMsXG4gICAgcmVuYW1lUHJvamVjdCxcbiAgICBnZXQgcHJvamVjdHMoKSB7XG4gICAgICByZXR1cm4gcHJvamVjdHM7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLWRhbmdsZSAqL1xuaW1wb3J0ICogYXMgZ2xvYmFsIGZyb20gJy4vZ2xvYmFsQ29uc3RhbnRzJztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCB7XG4gIHVwZGF0ZVRhc2tzTGlzdEhlYWRlcixcbiAgdXBkYXRlVGFza3NEaXNwbGF5LFxufSBmcm9tICcuL2RvbS11cGRhdGVUYXNrc0Rpc3BsYXknO1xuaW1wb3J0IHtcbiAgdG9kYXlDbGlja0hhbmRsZXIsXG4gIG5leHQ3ZGF5c0NsaWNrSGFuZGxlcixcbiAgdW5kYXRlZENsaWNrSGFuZGxlcixcbiAgY29tcGxldGVkQ2xpY2tIYW5kbGVyLFxuICBhbGxUYXNrc0NsaWNrSGFuZGxlcixcbn0gZnJvbSAnLi9kb20tdmlld3MnO1xuaW1wb3J0IHsgYWRkTmV3VGFzaywgdGFza0xpc3RDbGlja0hhbmRsZXIgfSBmcm9tICcuL2RvbS10YXNrcyc7XG5pbXBvcnQge1xuICBhZGROZXdQcm9qZWN0LFxuICB1cGRhdGVQcm9qZWN0c0Rpc3BsYXksXG4gIHByb2plY3RMaXN0Q2xpY2tIYW5kbGVyLFxufSBmcm9tICcuL2RvbS1wcm9qZWN0cyc7XG5cbmNvbnN0IHNjcmVlbkNvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIC8vIENyZWF0ZSBhIFByb2plY3RzIG9iamVjdCB3aXRoIGFuIGVtcHR5IGxpc3Qgb2YgcHJvamVjdHNcbiAgY29uc3QgcHJvamVjdHMgPSBQcm9qZWN0cygpO1xuICAvLyBSZWFkIHNhdmVkIHByb2plY3RzIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgaWYgKCFkYXRhKSB7XG4gICAgLy8gSWYgbm8gZGF0YSBleGlzdHMsIGNyZWF0ZSBhbiBlbXB0eSBJbmJveFxuICAgIHByb2plY3RzLmFkZFByb2plY3QoJ0luYm94Jyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlLCByZWJ1aWxkIHRoZSBwcm9qZWN0c1tdIGJ5IGNyZWF0aW5nIGEgbGlzdCBvZiBwcm9qZWN0IG9iamVjdHNcbiAgICAvLyBiYXNlZCBvbiB0aGUgc3RvcmVkIG5hbWVzIGFuZCB0YXNrc1xuICAgIGRhdGEuZm9yRWFjaCgocHJvamVjdERhdGEpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0RGF0YSkgcHJvamVjdHMuYWRkUHJvamVjdChwcm9qZWN0RGF0YS5uYW1lLCBwcm9qZWN0RGF0YS50YXNrcyk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBNYWtlIEluYm94IHRoZSBhY3RpdmVQcm9qZWN0XG4gIGxldCBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdHMucHJvamVjdHNbMF07XG5cbiAgLy8gRGVmYXVsdCB0byBzaG93IEluYm94XG4gIGxldCBzaG93VmlldyA9IGZhbHNlO1xuICBsZXQgbGlzdCA9IFtdO1xuXG4gIC8vIFJlYWQgdGhlIHNob3cgY29tcGxldGVkIHRhc2tzIHNldHRpbmcgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIGxldCBzaG93Q29tcGxldGVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2hvd0NvbXBsZXRlZCcpKTtcbiAgaWYgKCFzaG93Q29tcGxldGVkKSBzaG93Q29tcGxldGVkID0gZmFsc2U7XG5cbiAgLy8gRXZlbnQgbGlzdG5lcnNcbiAgLy8gLS0tIHRoZSBlbGVtZW50cyAtLS1cbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG4gIGNvbnN0IHNob3dDb21wbGV0ZWRDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LWNvbXBsZXRlZCcpO1xuICBzaG93Q29tcGxldGVkQ2hlY2tib3guY2hlY2tlZCA9IHNob3dDb21wbGV0ZWQ7XG5cbiAgY29uc3QgZGlzYWJsZUJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgYWRkUHJvamVjdEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgYWRkVGFza0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgc2hvd0NvbXBsZXRlZENoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBlbmFibGVCdXR0b25zID0gKCkgPT4ge1xuICAgIGFkZFByb2plY3RCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBhZGRUYXNrQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgc2hvd0NvbXBsZXRlZENoZWNrYm94LmRpc2FibGVkID0gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlQ3VycmVudFZpZXcgPSAoKSA9PiB7XG4gICAgaWYgKHNob3dWaWV3KSB7XG4gICAgICBsaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdCcpKTtcbiAgICAgIHVwZGF0ZVRhc2tzRGlzcGxheShwcm9qZWN0cywgbGlzdCwgc2hvd1ZpZXcsIHNob3dWaWV3ID09PSAnY29tcGxldGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZVRhc2tzRGlzcGxheShwcm9qZWN0cywgYWN0aXZlUHJvamVjdC50YXNrcyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRoZSBib2R5XG4gIGNvbnN0IGJvZHlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgYm9keUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAvLyBDbGlja2luZyBvbiBhbnkgZWxlbWVudCB3aXRoICdkaXNtaXNzJyB3aWxsIHJlZnJlc2ggdGhlIHByb2plY3RzIGFuZCB0YXNrcyBsaXN0XG4gICAgLy8gVGhpcyBkaXNtaXNzZXMgYW55IG9wZW4gYWRkIHRhc2ssIGVkaXQgdGFzayBhbmQgYWRkIHByb2plY3QgZm9ybXNcbiAgICAvLyBBbHNvIGVuYWJsZXMgYWRkIHRhc2ssIGFkZCBwcm9qZWN0IGFuZCBzaG93IGNvbXBsZXRlZCBzZXR0aW5nIGJ1dHRvbnMvY2hlY2tib3hcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNtaXNzJykpIHtcbiAgICAgIC8vIERpc21pc3MgYW55IHRhc2sgYmVpbmcgZWRpdGVkXG4gICAgICB1cGRhdGVDdXJyZW50VmlldygpO1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gVGhlIGFkZCB0YXNrIGJ1dHRvblxuICAvLyBeIFdoZW4gYWRkaW5nIGEgbmV3IHRhc2ssIHRoZSBmb3JtIGlzIGRpc21pc3NlZCBieVxuICAvLyAxLiBjbGljayBvbiB0aGUgU3VibWl0IGJ1dHRvblxuICAvLyAyLiBjbGljayBvbiBhbnkgZWxlbWVudCB3aXRoIHRoZSBjbGFzcyAnZGlzbWlzcydcbiAgLy8gMy4gY2xpY2sgb24gYSBwcm9qZWN0IGluIHRoZSBwcm9qZWN0cyBsaXN0XG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gRGlzYWJsZSB0aGUgZm9sbG93IGVsZW1lbnRzIHdoZW4gYWRkaW5nIGEgbmV3IHRhc2tcbiAgICAvLyBUaGlzIHByZXZlbnRzIG11bHRpcGxlIGVsZW1lbnRzIGFkZGVkIG9uIHNjcmVlblxuICAgIGRpc2FibGVCdXR0b25zKCk7XG4gICAgLy8gV2FpdCB1bnRpbCBhIG5ldyBUYXNrIGlzIGFkZGVkXG4gICAgYWRkTmV3VGFzayhwcm9qZWN0cywgYWN0aXZlUHJvamVjdCwgc2hvd1ZpZXcgIT09IGZhbHNlKS50aGVuKCgpID0+IHtcbiAgICAgIHVwZGF0ZUN1cnJlbnRWaWV3KCk7XG4gICAgICAvLyBBZnRlciBhIG5ldyB0YXNrIGlzIGNyZWF0ZWQsIHJlLSBlbmFibGUgdGhlc2UgZGlzYWJsZWQgZWxlbWVudHNcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gVGhlIGFkZCBwcm9qZWN0IGJ1dHRvblxuICAvLyBeIFdoZW4gYWRkaW5nIGEgbmV3IHByb2plY3QsIHRoZSBmb3JtIGlzIGRpc21pc3NlZCBieVxuICAvLyAxLiBwcmVzcyBlbnRlciB0byAnY2hhbmdlJyB0aGUgbmFtZVxuICAvLyAyLiBjbGljayBvbiBhbnkgZWxlbWVudCB3aXRoIHRoZSAnZGlzbWlzcycgY2xhc3NcbiAgLy8gMy4gcHJlc3NlICdFc2NcIlxuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpc2FibGVCdXR0b25zKCk7XG4gICAgYWRkTmV3UHJvamVjdChwcm9qZWN0cylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgYWN0aXZlUHJvamVjdCA9IHByb2plY3RzLnByb2plY3RzW3Byb2plY3RzLnByb2plY3RzLmxlbmd0aCAtIDFdO1xuICAgICAgICB1cGRhdGVQcm9qZWN0c0Rpc3BsYXkocHJvamVjdHMsIGFjdGl2ZVByb2plY3QpO1xuICAgICAgICB1cGRhdGVUYXNrc0Rpc3BsYXkocHJvamVjdHMsIGFjdGl2ZVByb2plY3QudGFza3MpO1xuICAgICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgfSk7XG4gIH0pO1xuXG4gIC8vIFRoZSBwcm9qZWN0cyBsaXN0XG4gIGdsb2JhbC5wcm9qZWN0TGlzdEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwcm9qZWN0TGlzdENsaWNrSGFuZGxlcihlLCBwcm9qZWN0cykudGhlbigoaW5kZXgpID0+IHtcbiAgICAgIGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0cy5wcm9qZWN0c1tpbmRleF07XG4gICAgICB1cGRhdGVQcm9qZWN0c0Rpc3BsYXkocHJvamVjdHMsIGFjdGl2ZVByb2plY3QpO1xuICAgICAgc2hvd1ZpZXcgPSBmYWxzZTtcbiAgICAgIHJlbW92ZVZpZXdIaWdobGlnaHQoKTtcbiAgICAgIHVwZGF0ZVRhc2tzTGlzdEhlYWRlcihwcm9qZWN0cywgYWN0aXZlUHJvamVjdCwgc2hvd1ZpZXcgIT09IGZhbHNlKTtcbiAgICAgIHVwZGF0ZVRhc2tzRGlzcGxheShwcm9qZWN0cywgYWN0aXZlUHJvamVjdC50YXNrcywgc2hvd1ZpZXcpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBUaGUgdGFza3MgbGxpc3RcbiAgLy8gXiBUaGUgZWRpdCBmb3JtIGlzIGRpc21pc3MgYnk6XG4gIC8vIDEuIGNoYW5nZSBvbmUgYXR0cmlidXRlIG9mIGEgdGFza1xuICAvLyAyLiBjbGljayBvbiBhbnkgZWxlbWVudHMgd2l0aCAnZGlzbWlzcycgY2xhc3NcbiAgLy8gMy4gY2xpY2sgb24gYSBwcm9qZWN0XG4gIGdsb2JhbC50YXNrc0xpc3RFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy8gUmVmcmVzaCB0aGUgcHJvamVjdCBsaXN0LCBpbiBjYXNlIGFuIGFkZCBwcm9qZWN0IGZvcm0gaXMgb3BlblxuICAgIHVwZGF0ZVByb2plY3RzRGlzcGxheShwcm9qZWN0cywgYWN0aXZlUHJvamVjdCk7XG5cbiAgICBjb25zdCB7IHJvdyB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICBjb25zdCB7IGNvbCB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICAvLyBJZ25vcmVzOlxuICAgIC8vIC0gY2xpY2sgb24gdGhlIG1hcmdpbiBvZiBhIHRhc2tcbiAgICAvLyAtIGNsaWNrIG9uIHRoZSBlbXB0eSBzcGFjZSBvciB0aGUgc3VibWl0IGJ1dHRvbiBvZiBhZGQgdGFza1xuICAgIC8vIC0gY2xpY2sgb24gaW5wdXQgZmlsZWRzIG9mIGVkaXRpbmcgYSB0YXNrXG4gICAgaWYgKCFyb3cgfHwgIWNvbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpc2FibGVCdXR0b25zKCk7XG5cbiAgICAvLyBEaXNtaXNzIGFueSB0YXNrIGJlaW5nIGVkaXRlZFxuICAgIHVwZGF0ZUN1cnJlbnRWaWV3KCk7XG5cbiAgICB0YXNrTGlzdENsaWNrSGFuZGxlcihcbiAgICAgIHJvdyxcbiAgICAgIGNvbCxcbiAgICAgIHByb2plY3RzLFxuICAgICAgYWN0aXZlUHJvamVjdCxcbiAgICAgIHNob3dWaWV3ICE9PSBmYWxzZVxuICAgICkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoc2hvd1ZpZXcpIHtcbiAgICAgICAgLy8gVXBkYXRlIGxpc3QsIG90aGVyd2lzZSBlZGl0cyBhcmUgbm90IHZpc2libGVcbiAgICAgICAgc3dpdGNoIChzaG93Vmlldykge1xuICAgICAgICAgIGNhc2UgJ3RvZGF5JzpcbiAgICAgICAgICAgIHRvZGF5Q2xpY2tIYW5kbGVyKHByb2plY3RzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ25leHQ3ZGF5cyc6XG4gICAgICAgICAgICBuZXh0N2RheXNDbGlja0hhbmRsZXIocHJvamVjdHMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAndW5kYXRlZCc6XG4gICAgICAgICAgICB1bmRhdGVkQ2xpY2tIYW5kbGVyKHByb2plY3RzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NvbXBsZXRlZCc6XG4gICAgICAgICAgICBjb21wbGV0ZWRDbGlja0hhbmRsZXIocHJvamVjdHMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYWxsVGFza3MnOlxuICAgICAgICAgICAgYWxsVGFza3NDbGlja0hhbmRsZXIocHJvamVjdHMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB1cGRhdGVDdXJyZW50VmlldygpO1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBUaGUgc2hvdyBjb21wbGV0ZWQgdGFza3MgY2hlY2tib3hcbiAgc2hvd0NvbXBsZXRlZENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBzaG93Q29tcGxldGVkID0gc2hvd0NvbXBsZXRlZENoZWNrYm94LmNoZWNrZWQ7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Nob3dDb21wbGV0ZWQnLCBKU09OLnN0cmluZ2lmeShzaG93Q29tcGxldGVkKSk7XG4gICAgdXBkYXRlQ3VycmVudFZpZXcoKTtcbiAgfSk7XG5cbiAgLy8gVmlld3NcbiAgY29uc3QgdG9kYXlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xuICBjb25zdCBuZXh0N2RheXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXh0N2RheXMnKTtcbiAgY29uc3QgdW5kYXRlZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuZGF0ZWQnKTtcbiAgY29uc3QgY29tcGxldGVkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcGxldGVkJyk7XG4gIGNvbnN0IGFsbFRhc2tzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsLXRhc2tzJyk7XG5cbiAgLy8gQ2xlYXIgaGlnaGxpZ2h0IGluIFZpZXdzXG4gIGNvbnN0IHJlbW92ZVZpZXdIaWdobGlnaHQgPSAoKSA9PiB7XG4gICAgdG9kYXlFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdmlldycpO1xuICAgIG5leHQ3ZGF5c0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS12aWV3Jyk7XG4gICAgdW5kYXRlZEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS12aWV3Jyk7XG4gICAgY29tcGxldGVkRWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXZpZXcnKTtcbiAgICBhbGxUYXNrc0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS12aWV3Jyk7XG4gIH07XG5cbiAgLy8gVGhlIHZpZXdzIGV2ZW50IGxpc3RlbmVyc1xuICB0b2RheUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIFJlbW92ZSBoaWdobGlnaHQgb2YgYWN0aXZlIHByb2plY3QsIGJ5IHVwZGF0aW5nIHdpdGhvdXQgYWN0aXZlUHJvamVjdFxuICAgIGFjdGl2ZVByb2plY3QgPSBudWxsO1xuICAgIHVwZGF0ZVByb2plY3RzRGlzcGxheShwcm9qZWN0cyk7XG4gICAgcmVtb3ZlVmlld0hpZ2hsaWdodCgpO1xuICAgIHRvZGF5RWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXZpZXcnKTtcbiAgICBzaG93VmlldyA9ICd0b2RheSc7XG4gICAgdXBkYXRlVGFza3NMaXN0SGVhZGVyKHByb2plY3RzLCBhY3RpdmVQcm9qZWN0LCBzaG93VmlldyAhPT0gZmFsc2UpO1xuICAgIHRvZGF5Q2xpY2tIYW5kbGVyKHByb2plY3RzKTtcbiAgfSk7XG5cbiAgbmV4dDdkYXlzRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gUmVtb3ZlIGhpZ2hsaWdodCBvZiBhY3RpdmUgcHJvamVjdCwgYnkgdXBkYXRpbmcgd2l0aG91dCBhY3RpdmVQcm9qZWN0XG4gICAgdXBkYXRlUHJvamVjdHNEaXNwbGF5KHByb2plY3RzKTtcbiAgICByZW1vdmVWaWV3SGlnaGxpZ2h0KCk7XG4gICAgbmV4dDdkYXlzRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXZpZXcnKTtcbiAgICBzaG93VmlldyA9ICduZXh0N2RheXMnO1xuICAgIHVwZGF0ZVRhc2tzTGlzdEhlYWRlcihwcm9qZWN0cywgYWN0aXZlUHJvamVjdCwgc2hvd1ZpZXcgIT09IGZhbHNlKTtcbiAgICBuZXh0N2RheXNDbGlja0hhbmRsZXIocHJvamVjdHMpO1xuICB9KTtcblxuICB1bmRhdGVkRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gUmVtb3ZlIGhpZ2hsaWdodCBvZiBhY3RpdmUgcHJvamVjdCwgYnkgdXBkYXRpbmcgd2l0aG91dCBhY3RpdmVQcm9qZWN0XG4gICAgdXBkYXRlUHJvamVjdHNEaXNwbGF5KHByb2plY3RzKTtcbiAgICByZW1vdmVWaWV3SGlnaGxpZ2h0KCk7XG4gICAgdW5kYXRlZEVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS12aWV3Jyk7XG4gICAgc2hvd1ZpZXcgPSAndW5kYXRlZCc7XG4gICAgdXBkYXRlVGFza3NMaXN0SGVhZGVyKHByb2plY3RzLCBhY3RpdmVQcm9qZWN0LCBzaG93VmlldyAhPT0gZmFsc2UpO1xuICAgIHVuZGF0ZWRDbGlja0hhbmRsZXIocHJvamVjdHMpO1xuICB9KTtcblxuICBjb21wbGV0ZWRFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyBSZW1vdmUgaGlnaGxpZ2h0IG9mIGFjdGl2ZSBwcm9qZWN0LCBieSB1cGRhdGluZyB3aXRob3V0IGFjdGl2ZVByb2plY3RcbiAgICB1cGRhdGVQcm9qZWN0c0Rpc3BsYXkocHJvamVjdHMpO1xuICAgIHJlbW92ZVZpZXdIaWdobGlnaHQoKTtcbiAgICBjb21wbGV0ZWRFbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdmlldycpO1xuICAgIHNob3dWaWV3ID0gJ2NvbXBsZXRlZCc7XG4gICAgdXBkYXRlVGFza3NMaXN0SGVhZGVyKHByb2plY3RzLCBhY3RpdmVQcm9qZWN0LCBzaG93VmlldyAhPT0gZmFsc2UpO1xuICAgIGNvbXBsZXRlZENsaWNrSGFuZGxlcihwcm9qZWN0cyk7XG4gIH0pO1xuXG4gIGFsbFRhc2tzRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gUmVtb3ZlIGhpZ2hsaWdodCBvZiBhY3RpdmUgcHJvamVjdCwgYnkgdXBkYXRpbmcgd2l0aG91dCBhY3RpdmVQcm9qZWN0XG4gICAgdXBkYXRlUHJvamVjdHNEaXNwbGF5KHByb2plY3RzKTtcbiAgICByZW1vdmVWaWV3SGlnaGxpZ2h0KCk7XG4gICAgYWxsVGFza3NFbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdmlldycpO1xuICAgIHNob3dWaWV3ID0gJ2FsbFRhc2tzJztcbiAgICB1cGRhdGVUYXNrc0xpc3RIZWFkZXIocHJvamVjdHMsIGFjdGl2ZVByb2plY3QsIHNob3dWaWV3ICE9PSBmYWxzZSk7XG4gICAgYWxsVGFza3NDbGlja0hhbmRsZXIocHJvamVjdHMpO1xuICB9KTtcblxuICB1cGRhdGVQcm9qZWN0c0Rpc3BsYXkocHJvamVjdHMsIGFjdGl2ZVByb2plY3QpO1xuICB1cGRhdGVUYXNrc0xpc3RIZWFkZXIocHJvamVjdHMsIGFjdGl2ZVByb2plY3QsIHNob3dWaWV3ICE9PSBmYWxzZSk7XG4gIHVwZGF0ZVRhc2tzRGlzcGxheShwcm9qZWN0cywgYWN0aXZlUHJvamVjdC50YXNrcywgc2hvd1ZpZXcpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2NyZWVuQ29udHJvbGxlcjtcbiIsImNvbnN0IFRhc2sgPSAoZm9jdXMsIHN0YXR1cywgZGVzY3JpcHRpb24sIHN0YXJ0RGF0ZSwgZHVlRGF0ZSwgcHJvamVjdEluZGV4LCB0YXNrSW5kZXgpID0+ICh7XG4gIGZvY3VzLFxuICBzdGF0dXMsXG4gIGRlc2NyaXB0aW9uLFxuICBzdGFydERhdGUsXG4gIGR1ZURhdGUsXG4gIHByb2plY3RJbmRleCxcbiAgdGFza0luZGV4LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCJmdW5jdGlvbiBpc0JlZm9yZShkYXRlU3RyaW5nLCBkYXlzKSB7XG4gIC8vIFBhcnNlIHRoZSBpbnB1dCBkYXRlIHN0cmluZyBpbnRvIGEgRGF0ZSBvYmplY3RcbiAgY29uc3QgaW5wdXREYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG4gIGlmICghaW5wdXREYXRlKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gR2V0IHRvZGF5J3MgZGF0ZVxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cbiAgY29uc3QgY3VycmVudFRpbWVzdGFtcCA9IHRvZGF5LmdldFRpbWUoKTtcblxuICBjb25zdCBmdXR1cmVEYXRlID0gY3VycmVudFRpbWVzdGFtcCArIGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4gIGNvbnN0IGRheXNMYXRlciA9IG5ldyBEYXRlKGZ1dHVyZURhdGUpO1xuXG4gIC8vIFNldCB0aGUgdGltZSBwYXJ0IG9mIGJvdGggZGF0ZXMgdG8gMDA6MDA6MDAgdG8gY29tcGFyZSBvbmx5IHRoZSBkYXRlc1xuICBpbnB1dERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHRvZGF5LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gIC8vIENvbXBhcmUgdGhlIGRhdGVzXG4gIGlmIChpbnB1dERhdGUgPCBkYXlzTGF0ZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzQmVmb3JlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9