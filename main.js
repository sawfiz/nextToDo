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

  // Display the tasks list body
  _globalConstants__WEBPACK_IMPORTED_MODULE_2__.tasksListEl.innerHTML = '';
  let row = 0;
  taskList.forEach((task) => {
    // In case of the Completed view, show completed tasks anyways
    if (!completedView) {
      if (!showCompleted && task.status === 'Done') return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDekIsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBSSxvRUFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4RUFBcUI7QUFDekIsSUFBSSxnRUFBb0I7QUFDeEIsR0FBRzs7QUFFSCxFQUFFLG9FQUFxQjtBQUN2QixFQUFFLDhFQUFxQjtBQUN2QixFQUFFLDJFQUFrQjtBQUNwQjs7QUFFQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDcFJoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1ZwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHRvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL25leHR0b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9uZXh0dG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25leHR0b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL25leHR0b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25leHR0b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9uZXh0dG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9uZXh0dG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9uZXh0dG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25leHR0b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbmV4dHRvZG8vLi9zcmMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9uZXh0dG9kby8uL3NyYy9kb20tcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vbmV4dHRvZG8vLi9zcmMvZG9tLXRhc2tzLmpzIiwid2VicGFjazovL25leHR0b2RvLy4vc3JjL2RvbS11cGRhdGVUYXNrc0Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vbmV4dHRvZG8vLi9zcmMvZG9tLXZpZXdzLmpzIiwid2VicGFjazovL25leHR0b2RvLy4vc3JjL2dsb2JhbENvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9uZXh0dG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0dG9kby8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL25leHR0b2RvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL25leHR0b2RvLy4vc3JjL3NjcmVlbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbmV4dHRvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9uZXh0dG9kby8uL3NyYy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxuICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTVmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyIDIwZnI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbmgxIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggYXV0bztcXG59XFxuXFxuLmluYm94LCAuYWRkLXRhc2ssIC5hZGQtcHJvamVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIG1hcmdpbjogNXB4IDIlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTEuNXJlbSBhdXRvIDUwcHg7XFxufVxcblxcbmgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnZpZXdzLWNvbnRhaW5lciwgLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi52aWV3LCAucHJvamVjdCB7XFxuICAvKiBtYXJnaW4tbGVmdDogMC41cmVtOyAqL1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDAuMnJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdHMtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDZmciAxZnI7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgbWF4LXdpZHRoOiAyMDBweDsgLyogU2V0IHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBkaXYgKi9cXG4gIG92ZXJmbG93OiBoaWRkZW47IC8qIEhpZGUgdGhlIGNvbnRlbnQgdGhhdCBleGNlZWRzIHRoZSBtYXgtd2lkdGggKi9cXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIFByZXZlbnQgdGhlIHRleHQgZnJvbSB3cmFwcGluZyB0byBhIG5ldyBsaW5lICovXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgLyogQWRkIGVsbGlwc2lzICguLi4pIHRvIGluZGljYXRlIHRoZSB0ZXh0IGlzIHRydW5jYXRlZCAqL1xcbn1cXG5cXG4uYWN0aXZlLXZpZXcsIC5hY3RpdmUtcHJvamVjdCB7XFxuICBjb2xvcjogYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXFxuLnByb2plY3QtbWluaS1tZW51IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgZ2FwOiAzcHg7XFxufVxcblxcbi5wcm9qZWN0LW1pbmktbWVudS1idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uc2V0dGluZ3MtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLm1haW4ge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCByZWQgc29saWQ7XFxufVxcblxcbi50YXNrcy1saXN0LWhlYWRlciwgLnRhc2sge1xcbiAgbWFyZ2luOiAwIDElO1xcbn1cXG5cXG4udGFza3MtbGlzdC1oZWFkZXIge1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICBib3JkZXItYm90dG9tOiAzcHggZGFya2dyYXkgc29saWQ7XFxufVxcblxcbi5ub3Qtc2hvdy1wcm9qZWN0LW5hbWUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxNWZyIDNmciAzZnI7XFxufVxcblxcbi5zaG93LXByb2plY3QtbmFtZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDE1ZnIgM2ZyIDNmciAzZnI7XFxufVxcblxcbi50YXNrIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICBtYXJnaW46IDAgMSU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2dyYXk7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcblxcbi50YXNrLWxpc3Qge1xcbiAgLyogYm9yZGVyOiAxcHggYmx1ZSBzb2xpZDsgKi9cXG4gIG1heC1oZWlnaHQ6IDUwdmg7XFxufVxcblxcbi5hY3RpdmUtdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5uZXctdGFzayB7XFxuICBtYXJnaW46IDAgMSU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDE1ZnIgM2ZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLm5ldy10YXNrLXdpdGgtcHJvamVjdCB7XFxuICBtYXJnaW46IDAgMSU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDE1ZnIgM2ZyIDNmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi5lZGl0aW5nLXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgbWFyZ2luOiAwIDElO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxNWZyIDNmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi5saW1pdGVkLXRleHQge1xcbiAgbWF4LXdpZHRoOiA5NSU7IC8qIFNldCB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgZGl2ICovXFxuICBvdmVyZmxvdzogaGlkZGVuOyAvKiBIaWRlIHRoZSBjb250ZW50IHRoYXQgZXhjZWVkcyB0aGUgbWF4LXdpZHRoICovXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiBQcmV2ZW50IHRoZSB0ZXh0IGZyb20gd3JhcHBpbmcgdG8gYSBuZXcgbGluZSAqL1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IC8qIEFkZCBlbGxpcHNpcyAoLi4uKSB0byBpbmRpY2F0ZSB0aGUgdGV4dCBpcyB0cnVuY2F0ZWQgKi9cXG59XFxuXFxuLmZvY3VzLWJ0biB7XFxuICBtYXJnaW46IDNweCAxNXB4IDNweCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZG9uZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaFxcbn1cXG5cXG4uZGF0ZS1wYXNzZWQge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmRlbGV0ZS1idG4ge1xcbiAgbWFyZ2luOiAzcHggMzAlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHNIQUFzSDtBQUN4SDs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCLEVBQUUscUNBQXFDO0VBQ3ZELGdCQUFnQixFQUFFLGdEQUFnRDtFQUNsRSxtQkFBbUIsRUFBRSxpREFBaUQ7RUFDdEUsdUJBQXVCLEVBQUUseURBQXlEO0FBQ3BGOztBQUVBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDJDQUEyQztFQUMzQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLCtDQUErQztFQUMvQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0MsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYyxFQUFFLHFDQUFxQztFQUNyRCxnQkFBZ0IsRUFBRSxnREFBZ0Q7RUFDbEUsbUJBQW1CLEVBQUUsaURBQWlEO0VBQ3RFLHVCQUF1QixFQUFFLHlEQUF5RDtBQUNwRjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGJvcmRlcjogMXB4IHJlZCBzb2xpZDsgKi9cXG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnIgMjBmcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCBhdXRvO1xcbn1cXG5cXG4uaW5ib3gsIC5hZGQtdGFzaywgLmFkZC1wcm9qZWN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgbWFyZ2luOiA1cHggMiU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMS41cmVtIGF1dG8gNTBweDtcXG59XFxuXFxuaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4udmlld3MtY29udGFpbmVyLCAucHJvamVjdHMtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLnZpZXcsIC5wcm9qZWN0IHtcXG4gIC8qIG1hcmdpbi1sZWZ0OiAwLjVyZW07ICovXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbjogMC4ycmVtIDA7XFxufVxcblxcbi5wcm9qZWN0cy1oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDFmcjtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICBtYXgtd2lkdGg6IDIwMHB4OyAvKiBTZXQgdGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGRpdiAqL1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogSGlkZSB0aGUgY29udGVudCB0aGF0IGV4Y2VlZHMgdGhlIG1heC13aWR0aCAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogUHJldmVudCB0aGUgdGV4dCBmcm9tIHdyYXBwaW5nIHRvIGEgbmV3IGxpbmUgKi9cXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAvKiBBZGQgZWxsaXBzaXMgKC4uLikgdG8gaW5kaWNhdGUgdGhlIHRleHQgaXMgdHJ1bmNhdGVkICovXFxufVxcblxcbi5hY3RpdmUtdmlldywgLmFjdGl2ZS1wcm9qZWN0IHtcXG4gIGNvbG9yOiBibHVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cXG4ucHJvamVjdC1taW5pLW1lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICBnYXA6IDNweDtcXG59XFxuXFxuLnByb2plY3QtbWluaS1tZW51LWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5zZXR0aW5ncy1jb250YWluZXIge1xcbiAgbWFyZ2luOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBib3JkZXItbGVmdDogMXB4IHJlZCBzb2xpZDtcXG59XFxuXFxuLnRhc2tzLWxpc3QtaGVhZGVyLCAudGFzayB7XFxuICBtYXJnaW46IDAgMSU7XFxufVxcblxcbi50YXNrcy1saXN0LWhlYWRlciB7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBkYXJrZ3JheSBzb2xpZDtcXG59XFxuXFxuLm5vdC1zaG93LXByb2plY3QtbmFtZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDE1ZnIgM2ZyIDNmcjtcXG59XFxuXFxuLnNob3ctcHJvamVjdC1uYW1lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMTVmciAzZnIgM2ZyIDNmcjtcXG59XFxuXFxuLnRhc2sge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIG1hcmdpbjogMCAxJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZ3JheTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuXFxuLnRhc2stbGlzdCB7XFxuICAvKiBib3JkZXI6IDFweCBibHVlIHNvbGlkOyAqL1xcbiAgbWF4LWhlaWdodDogNTB2aDtcXG59XFxuXFxuLmFjdGl2ZS10YXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLm5ldy10YXNrIHtcXG4gIG1hcmdpbjogMCAxJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMTVmciAzZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4ubmV3LXRhc2std2l0aC1wcm9qZWN0IHtcXG4gIG1hcmdpbjogMCAxJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMTVmciAzZnIgM2ZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLmVkaXRpbmctdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBtYXJnaW46IDAgMSU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDE1ZnIgM2ZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLmxpbWl0ZWQtdGV4dCB7XFxuICBtYXgtd2lkdGg6IDk1JTsgLyogU2V0IHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBkaXYgKi9cXG4gIG92ZXJmbG93OiBoaWRkZW47IC8qIEhpZGUgdGhlIGNvbnRlbnQgdGhhdCBleGNlZWRzIHRoZSBtYXgtd2lkdGggKi9cXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIFByZXZlbnQgdGhlIHRleHQgZnJvbSB3cmFwcGluZyB0byBhIG5ldyBsaW5lICovXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgLyogQWRkIGVsbGlwc2lzICguLi4pIHRvIGluZGljYXRlIHRoZSB0ZXh0IGlzIHRydW5jYXRlZCAqL1xcbn1cXG5cXG4uZm9jdXMtYnRuIHtcXG4gIG1hcmdpbjogM3B4IDE1cHggM3B4IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kb25lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoXFxufVxcblxcbi5kYXRlLXBhc3NlZCB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICBtYXJnaW46IDNweCAzMCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY2xhc3NBcnJheSwgYXR0ck9iaiwgdGV4dCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzQXJyYXkpO1xuXG4gIGZvciAoY29uc3QgYXR0ciBpbiBhdHRyT2JqKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0ck9ialthdHRyXSk7XG4gIH1cblxuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cbi8vIGltcG9ydCBcIkBtZGkvZm9udC9jc3MvbWF0ZXJpYWxkZXNpZ25pY29ucy5taW4uY3NzXCI7XG5pbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSAnLi9nbG9iYWxDb25zdGFudHMnO1xuaW1wb3J0IHsgdXBkYXRlVGFza3NEaXNwbGF5IH0gZnJvbSAnLi9kb20tdXBkYXRlVGFza3NEaXNwbGF5JztcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudCc7XG5cbi8vIEFkZCBtaW5pIG1lbnUgdG8gdGhlIGFjdGl2ZSBwcm9qZWN0XG5jb25zdCBhZGRQcm9qZWN0TWluaU1lbnUgPSAocHJvamVjdHMsIHByb2plY3RFbCwgaW5kZXgpID0+IHtcbiAgLy8gT25seSBhZGQgdGhlIG1pbmkgbWVudSBmb3IgcHJvamVjdHMgb3RoZXIgdGhhbiBJbmJveFxuICBpZiAoaW5kZXggPiAwKSB7XG4gICAgLy8gTWFrZSBwcm9qZWN0IGFuZCBwcm9qZWN0IG5hbWUgdmlzdWFsbHkgdW5jbGlja2FibGVcbiAgICBwcm9qZWN0RWwuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuICAgIHByb2plY3RFbC5jaGlsZHJlblswXS5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG5cbiAgICAvLyBDcmVhdGUgbWluaSBtZW51XG4gICAgY29uc3QgbWVudUVsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydwcm9qZWN0LW1pbmktbWVudSddLCB7fSwgJycpO1xuICAgIHByb2plY3RFbC5hcHBlbmRDaGlsZChtZW51RWwpO1xuICAgIC8vIEFkZCBhIHBsYWNlIGhvbGRlciBpbiB0aGUgZnJvbnQgc28gdGhlIGJ1dHRvbnMgYXJlIG9uIHRoZSByaWdodFxuICAgIG1lbnVFbC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCBbXSwge30sICcnKSk7XG5cbiAgICAvLyBUaGUgdXAgYXJyb3dcbiAgICAvLyBEbyBub3Qgc2hvdyBmb3IgdGhlIHByb2plY3QganVzdCBiZWxvdyBJbmJveFxuICAgIGlmIChpbmRleCA+IDEpIHtcbiAgICAgIG1lbnVFbC5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICBbJ3Byb2plY3QtbWluaS1tZW51LWJ1dHRvbicsICdtZGknLCAnbWRpLWNoZXZyb24tdXAnXSxcbiAgICAgICAgICB7ICdkYXRhLWJ0bic6ICd1cCcgfSxcbiAgICAgICAgICAnJ1xuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51RWwuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2JywgW10sIHt9LCAnJykpO1xuICAgIH1cblxuICAgIC8vIFNob3cgdGhlIGRvd24gYXJyb3dcbiAgICAvLyBEbyBub3Qgc2hvdyBmb3IgdGhlIHByb2plY3QgYXQgdGhlIGJvdHRvbiBvZiB0aGUgbGlzdFxuICAgIGlmIChpbmRleCA8IHByb2plY3RzLnByb2plY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgIG1lbnVFbC5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICBbJ3Byb2plY3QtbWluaS1tZW51LWJ1dHRvbicsICdtZGknLCAnbWRpLWNoZXZyb24tZG93biddLFxuICAgICAgICAgIHsgJ2RhdGEtYnRuJzogJ2Rvd24nIH0sXG4gICAgICAgICAgJydcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVudUVsLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFtdLCB7fSwgJycpKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgZWRpdCBidXR0b25cbiAgICBtZW51RWwuYXBwZW5kQ2hpbGQoXG4gICAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgWydwcm9qZWN0LW1pbmktbWVudS1idXR0b24nLCAnbWRpJywgJ21kaS1zcXVhcmUtZWRpdC1vdXRsaW5lJ10sXG4gICAgICAgIHsgJ2RhdGEtYnRuJzogJ2VkaXQnIH0sXG4gICAgICAgICcnXG4gICAgICApXG4gICAgKTtcblxuICAgIC8vIFRoZSBkZWxldGUgYnV0dG9uXG4gICAgbWVudUVsLmFwcGVuZENoaWxkKFxuICAgICAgY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgIFsncHJvamVjdC1taW5pLW1lbnUtYnV0dG9uJywgJ21kaScsICdtZGktY2xvc2UnXSxcbiAgICAgICAgeyAnZGF0YS1idG4nOiAncmVtb3ZlJywgc3R5bGU6ICdjb2xvcjogcmVkJyB9LFxuICAgICAgICAnJ1xuICAgICAgKVxuICAgICk7XG4gIH1cbn07XG5cbi8vIFJlZHJhd3MgdGhlIHByb2plY3RzIGxpc3RcbmNvbnN0IHVwZGF0ZVByb2plY3RzRGlzcGxheSA9IChwcm9qZWN0cywgYWN0aXZlUHJvamVjdCkgPT4ge1xuICAvLyBFbXB0eSB0aGUgY29udGVudCBvZiB0aGUgcHJvamVjdHMgbGlzdFxuICBnbG9iYWwucHJvamVjdExpc3RFbC5pbm5lckhUTUwgPSAnJztcblxuICAvLyBHbyB0aHJvdWdoIGVhY2ggcHJvamVjdCBpbiBwcm9qZWN0c1tdXG4gIHByb2plY3RzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEVsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydwcm9qZWN0J10sIHsgJ2RhdGEtaWQnOiBpbmRleCB9KTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUVsID0gY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgWydwcm9qZWN0LW5hbWUnLCAnbWRpJywgJ21kaS1saXN0LWJveC1vdXRsaW5lJ10sXG4gICAgICB7IHN0eWxlOiAnY3Vyc29yOiBwb2ludGVyJyB9LFxuICAgICAgYCAke3Byb2plY3QubmFtZX1gXG4gICAgKTtcbiAgICBwcm9qZWN0RWwuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbCk7XG5cbiAgICAvLyBIaWdobGlnaHQgdGhlIGFjdGl2ZSBwcm9qZWN0LCBhbmQgYWRkIGEgbWluaSBtZW51XG4gICAgaWYgKHByb2plY3QgPT09IGFjdGl2ZVByb2plY3QpIHtcbiAgICAgIHByb2plY3RFbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdCcpO1xuICAgICAgYWRkUHJvamVjdE1pbmlNZW51KHByb2plY3RzLCBwcm9qZWN0RWwsIGluZGV4KTtcbiAgICB9XG5cbiAgICBnbG9iYWwucHJvamVjdExpc3RFbC5hcHBlbmRDaGlsZChwcm9qZWN0RWwpO1xuICB9KTtcbn07XG5cbi8vIEFkZCBhIG5ldyBwcm9qZWN0XG5jb25zdCBhZGROZXdQcm9qZWN0ID0gKHByb2plY3RzKSA9PiB7XG4gIGNvbnN0IGlucHV0RWwgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIFsncHJvamVjdC10aXRsZSddLCB7fSk7XG4gIGdsb2JhbC5wcm9qZWN0TGlzdEVsLmFwcGVuZENoaWxkKGlucHV0RWwpO1xuICBpbnB1dEVsLmZvY3VzKCk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyBHZXQgYSBuYW1lIGZvciB0aGUgbmV3IHByb2plY3RcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHByb2plY3RzLmFkZFByb2plY3QoaW5wdXRFbC52YWx1ZSk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gICAgLy8gTGlzdGVuIGZvciB0aGUgRXNjIGtleVxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICBnbG9iYWwucHJvamVjdExpc3RFbC5yZW1vdmVDaGlsZChpbnB1dEVsKTtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gRXZlbnQgbGlzdGVuZXIgZm9yIFByb2plY3RzIExpc3RcbmNvbnN0IHByb2plY3RMaXN0Q2xpY2tIYW5kbGVyID0gKGUsIHByb2plY3RzKSA9PiB7XG4gIGxldCBpbmRleDtcbiAgbGV0IGFjdGl2ZVByb2plY3Q7XG4gIGNvbnN0IHBhcmVudEVsID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgZ3JhbmRQYXJlbnRFbCA9IHBhcmVudEVsLnBhcmVudEVsZW1lbnQ7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgLy8gQ2xpY2tlZCBvbiBhIHByb2plY3QtbmFtZVxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QtbmFtZScpKSB7XG4gICAgICAvLyBpZCBpcyBzdG9yZWQgYXMgYSBzdHJpbmcsIG5lZWQgdG8gY29udmVydCBpdCB0byBhIG51bWJlciB0byBhdm9pZCBpc3N1ZXNcbiAgICAgIGluZGV4ID0gTnVtYmVyKHBhcmVudEVsLmRhdGFzZXQuaWQpO1xuICAgICAgYWN0aXZlUHJvamVjdCA9IHByb2plY3RzLnByb2plY3RzW2luZGV4XTtcbiAgICAgIHVwZGF0ZVRhc2tzRGlzcGxheShwcm9qZWN0cywgYWN0aXZlUHJvamVjdC50YXNrcyk7XG4gICAgICByZXNvbHZlKGluZGV4KTtcbiAgICB9XG4gICAgLy8gQ2xpY2tlZCBvbiBhIG1pbmkgbWVudVxuICAgIGVsc2UgaWYgKHBhcmVudEVsLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdC1taW5pLW1lbnUnKSkge1xuICAgICAgLy8gaWQgaXMgc3RvcmVkIGFzIGEgc3RyaW5nLCBuZWVkIHRvIGNvbnZlcnQgaXQgdG8gYSBudW1iZXIgdG8gYXZvaWQgaXNzdWVzXG4gICAgICBpbmRleCA9IE51bWJlcihncmFuZFBhcmVudEVsLmRhdGFzZXQuaWQpO1xuXG4gICAgICBzd2l0Y2ggKGUudGFyZ2V0LmRhdGFzZXQuYnRuKSB7XG4gICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICBwcm9qZWN0cy5zd2FwUHJvamVjdChpbmRleCwgaW5kZXggLSAxKTtcbiAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgIHJlc29sdmUoaW5kZXgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICBwcm9qZWN0cy5zd2FwUHJvamVjdChpbmRleCwgaW5kZXggKyAxKTtcbiAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgIHJlc29sdmUoaW5kZXgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgICAvLyBSZXBsYWNlIHByb2plY3QgbmFtZSB3aXRoIGFuIGlucHV0XG4gICAgICAgICAgY29uc3QgaW5wdXRFbCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgW10sIHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIHZhbHVlOiBncmFuZFBhcmVudEVsLmNoaWxkcmVuWzBdLnRleHRDb250ZW50LFxuICAgICAgICAgICAgJ2RhdGEtaWQnOiBpbmRleCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBncmFuZFBhcmVudEVsLnJlcGxhY2VDaGlsZChpbnB1dEVsLCBncmFuZFBhcmVudEVsLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICBpbnB1dEVsLmZvY3VzKCk7XG5cbiAgICAgICAgICAvLyBMaXN0ZW4gZm9yIGNoYW5nZSBpbiB0aGUgaW5wdXRcbiAgICAgICAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lRWwgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgJ3Byb2plY3QtbmFtZScsXG4gICAgICAgICAgICAgIHsgc3R5bGU6ICdjdXJzb3I6IHBvaW50ZXInLCAnZGF0YS1pZCc6IGluZGV4IH0sXG4gICAgICAgICAgICAgIGlucHV0RWwudmFsdWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBSZW5hbWUgcHJvamVjdCBpbiB0aGUgZGF0YWJhc2VcbiAgICAgICAgICAgIGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0cy5wcm9qZWN0c1tpbmRleF07XG4gICAgICAgICAgICBwcm9qZWN0cy5yZW5hbWVQcm9qZWN0KGFjdGl2ZVByb2plY3QsIGlucHV0RWwudmFsdWUpO1xuICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgaW5wdXQgd2l0aCB0aGUgbmV3IHByb2plY3QgbmFtZVxuICAgICAgICAgICAgZ3JhbmRQYXJlbnRFbC5yZXBsYWNlQ2hpbGQocHJvamVjdE5hbWVFbCwgaW5wdXRFbCk7XG4gICAgICAgICAgICByZXNvbHZlKGluZGV4KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgICAgICBwcm9qZWN0cy5yZW1vdmVQcm9qZWN0KGluZGV4KTtcbiAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgcmVzb2x2ZShpbmRleCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgYWRkTmV3UHJvamVjdCwgdXBkYXRlUHJvamVjdHNEaXNwbGF5LCBwcm9qZWN0TGlzdENsaWNrSGFuZGxlciB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSAnLi9nbG9iYWxDb25zdGFudHMnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG4vLyBpbXBvcnQgdXBkYXRlVGFza3NEaXNwbGF5IGZyb20gJy4vdXBkYXRlVGFza3NEaXNwbGF5JztcblxuLy8gRnVuY3Rpb24gZm9yIGFkZGluZyBhIG5ldyB0YXNrXG5jb25zdCBhZGROZXdUYXNrID0gKHByb2plY3RzLCBhY3RpdmVQcm9qZWN0LCBzaG93VmlldykgPT4ge1xuICAvLyBDcmVhdGUgYSBuZXcgdGFzayBlbGVtZW50XG4gIGNvbnN0IHRhc2tFbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnbmV3LXRhc2snXSwge30sICcnKTtcblxuICAvLyBDcmVhdGUgZWFjaCBwYXJ0IG9mIGEgdGFzayBlbGVsbWVudFxuICBjb25zdCBmb2N1c0VsID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBbXSwgeyB0eXBlOiAnY2hlY2tib3gnIH0sICcnKTtcbiAgdGFza0VsLmFwcGVuZENoaWxkKGZvY3VzRWwpO1xuXG4gIGNvbnN0IHN0YXR1c0VsID0gY3JlYXRlRWxlbWVudCgnc2VsZWN0JywgW10sIHt9LCAnJyk7XG4gIGNvbnN0IHN0YXR1c1RvRG9FbCA9IGNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIFtdLCB7fSwgJ1RvIGRvJyk7XG4gIHN0YXR1c0VsLmFwcGVuZENoaWxkKHN0YXR1c1RvRG9FbCk7XG4gIGNvbnN0IHN0YXR1c0RvaW5nRWwgPSBjcmVhdGVFbGVtZW50KCdvcHRpb24nLCBbXSwge30sICdEb2luZycpO1xuICBzdGF0dXNFbC5hcHBlbmRDaGlsZChzdGF0dXNEb2luZ0VsKTtcbiAgY29uc3Qgc3RhdHVzV2FpdEVsID0gY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgW10sIHt9LCAnV2FpdGluZycpO1xuICBzdGF0dXNFbC5hcHBlbmRDaGlsZChzdGF0dXNXYWl0RWwpO1xuICBjb25zdCBzdGF0dXNEb25lRWwgPSBjcmVhdGVFbGVtZW50KCdvcHRpb24nLCBbXSwge30sICdEb25lJyk7XG4gIHN0YXR1c0VsLmFwcGVuZENoaWxkKHN0YXR1c0RvbmVFbCk7XG4gIHRhc2tFbC5hcHBlbmRDaGlsZChzdGF0dXNFbCk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25FbCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgW10sIHt9LCAnJyk7XG4gIHRhc2tFbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsKTtcblxuICBjb25zdCBwcm9qZWN0RWwgPSBjcmVhdGVFbGVtZW50KCdzZWxlY3QnLCBbXSwge30sICcnKTtcbiAgaWYgKHNob3dWaWV3KSB7XG4gICAgcHJvamVjdHMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uRWwgPSBjcmVhdGVFbGVtZW50KCdvcHRpb24nLCBbXSwge30sIHByb2plY3QubmFtZSk7XG4gICAgICBwcm9qZWN0RWwuYXBwZW5kQ2hpbGQob3B0aW9uRWwpO1xuICAgIH0pO1xuICAgIHRhc2tFbC5hcHBlbmRDaGlsZChwcm9qZWN0RWwpO1xuICAgIHRhc2tFbC5jbGFzc0xpc3QucmVtb3ZlKCduZXctdGFzaycpO1xuICAgIHRhc2tFbC5jbGFzc0xpc3QuYWRkKCduZXctdGFzay13aXRoLXByb2plY3QnKTtcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0RGF0ZUVsID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBbXSwgeyB0eXBlOiAnZGF0ZScgfSwgJycpO1xuICB0YXNrRWwuYXBwZW5kQ2hpbGQoc3RhcnREYXRlRWwpO1xuXG4gIGNvbnN0IGR1ZURhdGVFbCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgW10sIHsgdHlwZTogJ2RhdGUnIH0sICcnKTtcbiAgdGFza0VsLmFwcGVuZENoaWxkKGR1ZURhdGVFbCk7XG5cbiAgLy8gTWFrZSBwbGFjZWhvbGRlcnMgc28gdGhlIFN1Ym1pdCBidXR0b24gc2hvd3MgdXAgYXQgdGhlIGVuZFxuICBjb25zdCBza2lwID0gc2hvd1ZpZXcgPyA1IDogNDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBza2lwOyBpKyspIHtcbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2JywgW10sIHt9LCAnJykpO1xuICB9XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFtdLCB7fSwgJ1N1Ym1pdCcpO1xuICB0YXNrRWwuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICAvLyBBdHRhY2ggdGhlIG5ldyB0YXNrIGVsZW1lbnQgdG8gdGhlIHRhc2tzTGlzdCBlbGVtZW50XG4gIGdsb2JhbC50YXNrc0xpc3RFbC5hcHBlbmRDaGlsZCh0YXNrRWwpO1xuXG4gIC8vIEZvY3VzIG9uIHRoZSBkZXNjcmlwdGlvbiBzbyB0aGUgdXNlciBjYW4gc3RhcnQgZW50ZXJpbmcgdGV4dFxuICBkZXNjcmlwdGlvbkVsLmZvY3VzKCk7XG5cbiAgLy8gV2FpdCBmb3IgdGhlIHN1Ym1pdCBidXR0b24gdG8gYmUgY2xpY2tlZCBvblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SW5kZXggPVxuICAgICAgICBzaG93VmlldyA9PT0gdHJ1ZVxuICAgICAgICAgID8gcHJvamVjdEVsLnNlbGVjdGVkSW5kZXhcbiAgICAgICAgICA6IHByb2plY3RzLnByb2plY3RzLmluZGV4T2YoYWN0aXZlUHJvamVjdCk7XG4gICAgICBjb25zdCB0YXNrID0gVGFzayhcbiAgICAgICAgZm9jdXNFbC5jaGVja2VkLFxuICAgICAgICAvLyBzdGF0dXMgaXMgZnJvbSBhcnJheSBbJ1RvZG8nLCAnRG9pbmcnLCAnV2FpdCcsICdEb25lJ11cbiAgICAgICAgZ2xvYmFsLnN0YXR1c1tzdGF0dXNFbC5zZWxlY3RlZEluZGV4XSxcbiAgICAgICAgZGVzY3JpcHRpb25FbC52YWx1ZSxcbiAgICAgICAgc3RhcnREYXRlRWwudmFsdWUsXG4gICAgICAgIGR1ZURhdGVFbC52YWx1ZSxcbiAgICAgICAgcHJvamVjdEluZGV4LFxuICAgICAgICBwcm9qZWN0cy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLmxlbmd0aFxuICAgICAgKTtcblxuICAgICAgcHJvamVjdHMuYWRkVGFza1RvUHJvamVjdCh0YXNrLCBwcm9qZWN0cy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBIYW5kbGVzIGEgdmFsaWQgY2xpY2sgb24gdGhlIHRhc2tzIGxpc3RcbmNvbnN0IHRhc2tMaXN0Q2xpY2tIYW5kbGVyID0gKHJvdywgY29sLCBwcm9qZWN0cywgYWN0aXZlUHJvamVjdCwgc2hvd1ZpZXcpID0+IHtcbiAgY29uc29sZS5sb2coXG4gICAgJ/CfmoAgfiBmaWxlOiBkb20tdGFza3MuanM6MTU2IH4gdGFza0xpc3RDbGlja0hhbmRsZXIgfiByb3csIGNvbDonLFxuICAgIHJvdyxcbiAgICBjb2xcbiAgKTtcbiAgY29uc3QgdGFza0VsID0gZ2xvYmFsLnRhc2tzTGlzdEVsLmNoaWxkcmVuW3Jvd107XG4gIGNvbnNvbGUubG9nKFxuICAgICfwn5qAIH4gZmlsZTogZG9tLXRhc2tzLmpzOjc1IH4gdGFza0xpc3RDbGlja0hhbmRsZXIgfiBnbG9iYWwudGFza3NMaXN0RWw6JyxcbiAgICBnbG9iYWwudGFza3NMaXN0RWxcbiAgKTtcbiAgY29uc29sZS5sb2coXG4gICAgJ/CfmoAgfiBmaWxlOiBkb20tdGFza3MuanM6MTU3IH4gdGFza0xpc3RDbGlja0hhbmRsZXIgfiB0YXNrRWw6JyxcbiAgICB0YXNrRWxcbiAgKTtcbiAgdGFza0VsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YXNrJyk7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHRhc2tFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdEluZGV4Jyk7XG4gIGNvbnNvbGUubG9nKFxuICAgICfwn5qAIH4gZmlsZTogZG9tLXRhc2tzLmpzOjgyIH4gdGFza0xpc3RDbGlja0hhbmRsZXIgfiBwcm9qZWN0SW5kZXg6JyxcbiAgICBwcm9qZWN0SW5kZXhcbiAgKTtcbiAgY29uc3QgdGFza0luZGV4ID0gdGFza0VsLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrSW5kZXgnKTtcbiAgY29uc29sZS5sb2coXG4gICAgJ/CfmoAgfiBmaWxlOiBkb20tdGFza3MuanM6ODQgfiB0YXNrTGlzdENsaWNrSGFuZGxlciB+IHRhc2tJbmRleDonLFxuICAgIHRhc2tJbmRleFxuICApO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IGVkaXRpbmdUYXNrRWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2VkaXRpbmctdGFzayddLCB7fSwgJycpO1xuXG4gICAgLy8gRm9jdXMgYnV0dG9uXG4gICAgY29uc3QgZm9jdXNJY29uID0gdGFza0VsLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcbiAgICBjb25zdCBmb2N1c0VsID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgWydmb2N1cy1idG4nXSwge30sIGZvY3VzSWNvbik7XG4gICAgZWRpdGluZ1Rhc2tFbC5hcHBlbmRDaGlsZChmb2N1c0VsKTtcblxuICAgIC8vIFN0YXR1cyBwdWxsIGRvd25cbiAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gTnVtYmVyKHRhc2tFbC5jaGlsZHJlblsxXS5kYXRhc2V0LnN0YXR1c2luZGV4KTtcblxuICAgIGNvbnN0IHN0YXR1c0VsID0gY3JlYXRlRWxlbWVudCgnc2VsZWN0JywgW10sIHt9LCAnJyk7XG4gICAgLy8gT3B0aW9uIGlzIGZyb20gdGhlIHN0YXR1c0ljb25zIGRpY3Rpb25hcnlcbiAgICBjb25zdCBzdGF0dXNUb0RvRWwgPSBjcmVhdGVFbGVtZW50KCdvcHRpb24nLCBbXSwge30sICdUbyBkbycpO1xuICAgIGlmIChzZWxlY3RlZEluZGV4ID09PSAwKSBzdGF0dXNUb0RvRWwuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIHN0YXR1c0VsLmFwcGVuZENoaWxkKHN0YXR1c1RvRG9FbCk7XG4gICAgY29uc3Qgc3RhdHVzRG9pbmdFbCA9IGNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIFtdLCB7fSwgJ0RvaW5nJyk7XG4gICAgaWYgKHNlbGVjdGVkSW5kZXggPT09IDEpIHN0YXR1c0RvaW5nRWwuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIHN0YXR1c0VsLmFwcGVuZENoaWxkKHN0YXR1c0RvaW5nRWwpO1xuICAgIGNvbnN0IHN0YXR1c1dhaXRFbCA9IGNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIFtdLCB7fSwgJ1dhaXRpbmcnKTtcbiAgICBpZiAoc2VsZWN0ZWRJbmRleCA9PT0gMikgc3RhdHVzV2FpdEVsLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBzdGF0dXNFbC5hcHBlbmRDaGlsZChzdGF0dXNXYWl0RWwpO1xuICAgIGNvbnN0IHN0YXR1c0RvbmVFbCA9IGNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIFtdLCB7fSwgJ0RvbmUnKTtcbiAgICBpZiAoc2VsZWN0ZWRJbmRleCA9PT0gMykgc3RhdHVzRG9uZUVsLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBzdGF0dXNFbC5hcHBlbmRDaGlsZChzdGF0dXNEb25lRWwpO1xuICAgIGVkaXRpbmdUYXNrRWwuYXBwZW5kQ2hpbGQoc3RhdHVzRWwpO1xuXG4gICAgLy8gRGVzY3JpcHRpb24gdGV4dCBpbnB1dFxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGFza0VsLmNoaWxkcmVuWzJdLmlubmVyVGV4dDtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkVsID0gY3JlYXRlRWxlbWVudChcbiAgICAgICdpbnB1dCcsXG4gICAgICBbXSxcbiAgICAgIHsgdmFsdWU6IGRlc2NyaXB0aW9uIH0sXG4gICAgICAnJ1xuICAgICk7XG4gICAgZWRpdGluZ1Rhc2tFbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsKTtcblxuICAgIC8vIFN0YXJ0RGF0ZSBkYXRlIGlucHV0XG4gICAgY29uc3Qgc3RhcnREYXRlRWwgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgJ2lucHV0JyxcbiAgICAgIFtdLFxuICAgICAgeyB0eXBlOiAnZGF0ZScsIHZhbHVlOiB0YXNrRWwuY2hpbGRyZW5bM10uaW5uZXJUZXh0IH0sXG4gICAgICAnJ1xuICAgICk7XG4gICAgZWRpdGluZ1Rhc2tFbC5hcHBlbmRDaGlsZChzdGFydERhdGVFbCk7XG5cbiAgICAvLyBVcGRhdGUgZHVlRGF0ZVxuICAgIGNvbnN0IGR1ZURhdGVFbCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAnaW5wdXQnLFxuICAgICAgW10sXG4gICAgICB7IHR5cGU6ICdkYXRlJywgdmFsdWU6IHRhc2tFbC5jaGlsZHJlbls0XS5pbm5lclRleHQgfSxcbiAgICAgICcnXG4gICAgKTtcbiAgICBlZGl0aW5nVGFza0VsLmFwcGVuZENoaWxkKGR1ZURhdGVFbCk7XG5cbiAgICAvLyBQbGFjZSBob2xkZXJzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBub3QgdG8gdXNlICdkaXYnIGhlcmUgZHVlIHRvIGEgY2hlY2sgaW4gc2NyZWVuQ29udHJvbGxlcigpXG4gICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCgncCcsIFtdLCB7fSwgJycpO1xuICAgICAgZWRpdGluZ1Rhc2tFbC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBUaGUgcHJvamVjdCBsaXN0IGRyb3AgZG93blxuICAgIGNvbnN0IHByb2plY3REcm9wRG93bkVsID0gY3JlYXRlRWxlbWVudCgnc2VsZWN0JywgW10sIHt9LCAnJyk7XG4gICAgLy8gT3B0aW9ucyBhcmUgcHJvamVjdCBuYW1lc1xuICAgIHByb2plY3RzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RFbCA9IGNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIFtdLCB7fSwgcHJvamVjdC5uYW1lKTtcbiAgICAgIGlmIChwcm9qZWN0ID09PSBhY3RpdmVQcm9qZWN0KSB7XG4gICAgICAgIHByb2plY3RFbC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBwcm9qZWN0RHJvcERvd25FbC5hcHBlbmRDaGlsZChwcm9qZWN0RWwpO1xuICAgIH0pO1xuXG4gICAgZWRpdGluZ1Rhc2tFbC5hcHBlbmRDaGlsZChwcm9qZWN0RHJvcERvd25FbCk7XG5cbiAgICAvLyBUaGUgZGVsZXRlIGJ1dHRvblxuICAgIGNvbnN0IGRlbEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFsnZGVsZXRlLWJ0biddLCB7fSwgJ+KdjCcpO1xuICAgIGVkaXRpbmdUYXNrRWwuYXBwZW5kQ2hpbGQoZGVsQnRuKTtcblxuICAgIGNvbnN0IHRoaXNQcm9qZWN0ID1cbiAgICAgIHNob3dWaWV3ID09PSB0cnVlID8gcHJvamVjdHMucHJvamVjdHNbcHJvamVjdEluZGV4XSA6IGFjdGl2ZVByb2plY3Q7XG4gICAgY29uc29sZS5sb2coXG4gICAgICAn8J+agCB+IGZpbGU6IGRvbS10YXNrcy5qczoyMjUgfiByZXR1cm5uZXdQcm9taXNlIH4gdGhpc1Byb2plY3Q6JyxcbiAgICAgIHRoaXNQcm9qZWN0XG4gICAgKTtcbiAgICBnbG9iYWwudGFza3NMaXN0RWwucmVwbGFjZUNoaWxkKGVkaXRpbmdUYXNrRWwsIHRhc2tFbCk7XG5cbiAgICBmb2N1c0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgLy8gVG9nZ2xlIGZvY3VzIGljb25cbiAgICAgIGxldCB2YWx1ZSA9IGZvY3VzSWNvbiA9PT0gJ/Cfq6UnID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgcHJvamVjdHMudXBkYXRlVGFza2luUHJvamVjdCh0aGlzUHJvamVjdCwgdGFza0luZGV4LCAnZm9jdXMnLCB2YWx1ZSk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG5cbiAgICBzdGF0dXNFbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0cy51cGRhdGVUYXNraW5Qcm9qZWN0KFxuICAgICAgICB0aGlzUHJvamVjdCxcbiAgICAgICAgdGFza0luZGV4LFxuICAgICAgICAnc3RhdHVzJyxcbiAgICAgICAgZ2xvYmFsLnN0YXR1c1tzdGF0dXNFbC5zZWxlY3RlZEluZGV4XVxuICAgICAgKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaXB0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgcHJvamVjdHMudXBkYXRlVGFza2luUHJvamVjdChcbiAgICAgICAgdGhpc1Byb2plY3QsXG4gICAgICAgIHRhc2tJbmRleCxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb25FbC52YWx1ZVxuICAgICAgKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcblxuICAgIC8vIFVzZSBibHVyIGluc3RlYWQgb2YgY2hhbmdlLCBzbyBpdCBkb2VzIG5vdCBmaXJlIHRvbyBzb29uXG4gICAgc3RhcnREYXRlRWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgIHByb2plY3RzLnVwZGF0ZVRhc2tpblByb2plY3QoXG4gICAgICAgIHRoaXNQcm9qZWN0LFxuICAgICAgICB0YXNrSW5kZXgsXG4gICAgICAgICdzdGFydERhdGUnLFxuICAgICAgICBzdGFydERhdGVFbC52YWx1ZVxuICAgICAgKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcblxuICAgIC8vIFVzZSBibHVyIGluc3RlYWQgb2YgY2hhbmdlLCBzbyBpdCBkb2VzIG5vdCBmaXJlIHRvbyBzb29uXG4gICAgZHVlRGF0ZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0cy51cGRhdGVUYXNraW5Qcm9qZWN0KFxuICAgICAgICB0aGlzUHJvamVjdCxcbiAgICAgICAgdGFza0luZGV4LFxuICAgICAgICAnZHVlRGF0ZScsXG4gICAgICAgIGR1ZURhdGVFbC52YWx1ZVxuICAgICAgKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcblxuICAgIHByb2plY3REcm9wRG93bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAn8J+agCB+IGZpbGU6IGRvbS10YXNrcy5qczoyOTAgfiBwcm9qZWN0RHJvcERvd25FbC5hZGRFdmVudExpc3RlbmVyIH4gcHJvamVjdERyb3BEb3duRWwuc2VsZWN0ZWRJbmRleDonLFxuICAgICAgICBwcm9qZWN0RHJvcERvd25FbC5zZWxlY3RlZEluZGV4XG4gICAgICApO1xuICAgICAgcHJvamVjdHMudXBkYXRlVGFza2luUHJvamVjdChcbiAgICAgICAgdGhpc1Byb2plY3QsXG4gICAgICAgIHRhc2tJbmRleCxcbiAgICAgICAgJ3Byb2plY3RJbmRleCcsXG4gICAgICAgIHByb2plY3REcm9wRG93bkVsLnNlbGVjdGVkSW5kZXhcbiAgICAgICk7XG5cbiAgICAgIHByb2plY3RzLm1vdmVUYXNrdG9Qcm9qZWN0KFxuICAgICAgICB0aGlzUHJvamVjdCxcbiAgICAgICAgdGFza0luZGV4LFxuICAgICAgICBwcm9qZWN0cy5wcm9qZWN0c1twcm9qZWN0RHJvcERvd25FbC5zZWxlY3RlZEluZGV4XVxuICAgICAgKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcblxuICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIENhbGwgZnJvbSBwcm9qZWN0cyB0byBkZWxldGUgdGhlIHRhc2tcbiAgICAgIC8vIHNvIHRoYXQgdGhlIGxvY2FsIHN0b3JhZ2UgaXMgdXBkYXRlZCBhZnRlciB0aGUgZGVsZXRpb25cbiAgICAgIHByb2plY3RzLmRlbGV0ZVRhc2tGcm9tUHJvamVjdCh0YXNrSW5kZXgsIHRoaXNQcm9qZWN0KTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBhZGROZXdUYXNrLCB0YXNrTGlzdENsaWNrSGFuZGxlciB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVubmVlZGVkLXRlcm5hcnkgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCAqIGFzIGdsb2JhbCBmcm9tICcuL2dsb2JhbENvbnN0YW50cyc7XG5pbXBvcnQgaXNCZWZvcmUgZnJvbSAnLi91dGlscyc7XG5cbmxldCBmb2N1c0FzY2VuZCA9IHRydWU7XG5sZXQgc3RhdHVzQXNjZW5kID0gdHJ1ZTtcbmxldCBkZXNjcmlwdGlvbkFzY2VuZCA9IHRydWU7XG5sZXQgcHJvamVjdEFzY2VuZCA9IHRydWU7XG5sZXQgc3RhcnREYXRlQXNjZW5kID0gdHJ1ZTtcbmxldCBkdWVEYXRlQXNjZW5kID0gdHJ1ZTtcblxuY29uc3QgZ2V0TGlzdCA9IChhY3RpdmVQcm9qZWN0LCBzaG93UHJvamVjdCkgPT4ge1xuICBpZiAoc2hvd1Byb2plY3QpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdCcpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYWN0aXZlUHJvamVjdC50YXNrcztcbiAgfVxufTtcblxuY29uc3Qgc29ydEJ5S2V5ID0gKGFycmF5LCBrZXksIHNvcnRBc2NlbmQpID0+IHtcbiAgcmV0dXJuIGFycmF5LnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoc29ydEFzY2VuZCkge1xuICAgICAgcmV0dXJuIGFba2V5XSA8IGJba2V5XSA/IC0xIDogMTtcbiAgICB9XG4gICAgcmV0dXJuIGFba2V5XSA+IGJba2V5XSA/IC0xIDogMTtcbiAgfSk7XG59O1xuXG5jb25zdCB1cGRhdGVUYXNrc0xpc3RIZWFkZXIgPSAocHJvamVjdHMsIGFjdGl2ZVByb2plY3QsIHNob3dQcm9qZWN0KSA9PiB7XG4gIC8vIERpc3BsYXkgdGhlIHRhc2tzIGxpc3QgaGVhZGVyXG4gIGNvbnN0IHRhc2tMaXN0SGVhZGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtbGlzdC1oZWFkZXInKTtcbiAgdGFza0xpc3RIZWFkZXJFbC5pbm5lckhUTUwgPSAnJztcbiAgaWYgKHNob3dQcm9qZWN0KSB7XG4gICAgdGFza0xpc3RIZWFkZXJFbC5jbGFzc0xpc3QucmVtb3ZlKCdub3Qtc2hvdy1wcm9qZWN0LW5hbWUnKTtcbiAgICB0YXNrTGlzdEhlYWRlckVsLmNsYXNzTGlzdC5hZGQoJ3Nob3ctcHJvamVjdC1uYW1lJyk7XG4gIH0gZWxzZSB7XG4gICAgdGFza0xpc3RIZWFkZXJFbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LXByb2plY3QtbmFtZScpO1xuICAgIHRhc2tMaXN0SGVhZGVyRWwuY2xhc3NMaXN0LmFkZCgnbm90LXNob3ctcHJvamVjdC1uYW1lJyk7XG4gIH1cblxuICBjb25zdCBzb3J0QnlGb2N1c0J0biA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgJ2J0bicsXG4gICAgW10sXG4gICAgeyBzdHlsZTogJ2N1cnNvcjogcG9pbnRlcjsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXInIH0sXG4gICAgJ+KGle+4jydcbiAgKTtcbiAgdGFza0xpc3RIZWFkZXJFbC5hcHBlbmRDaGlsZChzb3J0QnlGb2N1c0J0bik7XG4gIHNvcnRCeUZvY3VzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBnZXRMaXN0KGFjdGl2ZVByb2plY3QsIHNob3dQcm9qZWN0KTtcbiAgICBmb2N1c0FzY2VuZCA9IGZvY3VzQXNjZW5kID8gZmFsc2UgOiB0cnVlO1xuICAgIGNvbnN0IHNvcnRlZExpc3QgPSBzb3J0QnlLZXkobGlzdCwgJ2ZvY3VzJywgZm9jdXNBc2NlbmQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkoc29ydGVkTGlzdCkpO1xuICAgIHVwZGF0ZVRhc2tzRGlzcGxheShwcm9qZWN0cywgc29ydGVkTGlzdCwgc2hvd1Byb2plY3QsIGZhbHNlKTtcbiAgfSk7XG5cbiAgY29uc3Qgc29ydEJ5U3RhdHVzQnRuID0gY3JlYXRlRWxlbWVudChcbiAgICAnYnRuJyxcbiAgICBbXSxcbiAgICB7IHN0eWxlOiAnY3Vyc29yOiBwb2ludGVyOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcicgfSxcbiAgICAn4oaV77iPJ1xuICApO1xuICB0YXNrTGlzdEhlYWRlckVsLmFwcGVuZENoaWxkKHNvcnRCeVN0YXR1c0J0bik7XG4gIHNvcnRCeVN0YXR1c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gZ2V0TGlzdChhY3RpdmVQcm9qZWN0LCBzaG93UHJvamVjdCk7XG4gICAgc3RhdHVzQXNjZW5kID0gc3RhdHVzQXNjZW5kID8gZmFsc2UgOiB0cnVlO1xuICAgIGNvbnN0IHNvcnRlZExpc3QgPSBzb3J0QnlLZXkobGlzdCwgJ3N0YXR1cycsIHN0YXR1c0FzY2VuZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3QnLCBKU09OLnN0cmluZ2lmeShzb3J0ZWRMaXN0KSk7XG4gICAgdXBkYXRlVGFza3NEaXNwbGF5KHByb2plY3RzLCBzb3J0ZWRMaXN0LCBzaG93UHJvamVjdCwgZmFsc2UpO1xuICB9KTtcblxuICBjb25zdCBoZWFkZXJEZXNjcmlwdGlvbkVsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgW10sIHt9LCAnRGVzY3JpcHRpb24gJyk7XG4gIHRhc2tMaXN0SGVhZGVyRWwuYXBwZW5kQ2hpbGQoaGVhZGVyRGVzY3JpcHRpb25FbCk7XG4gIGNvbnN0IHNvcnRCeURlc2NyaXB0aW9uQnRuID0gY3JlYXRlRWxlbWVudChcbiAgICAnYnRuJyxcbiAgICBbXSxcbiAgICB7IHN0eWxlOiAnY3Vyc29yOiBwb2ludGVyJyB9LFxuICAgICfihpXvuI8nXG4gICk7XG4gIGhlYWRlckRlc2NyaXB0aW9uRWwuYXBwZW5kQ2hpbGQoc29ydEJ5RGVzY3JpcHRpb25CdG4pO1xuICBzb3J0QnlEZXNjcmlwdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gZ2V0TGlzdChhY3RpdmVQcm9qZWN0LCBzaG93UHJvamVjdCk7XG4gICAgZGVzY3JpcHRpb25Bc2NlbmQgPSBkZXNjcmlwdGlvbkFzY2VuZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICBjb25zdCBzb3J0ZWRMaXN0ID0gc29ydEJ5S2V5KGxpc3QsICdkZXNjcmlwdGlvbicsIGRlc2NyaXB0aW9uQXNjZW5kKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdCcsIEpTT04uc3RyaW5naWZ5KHNvcnRlZExpc3QpKTtcbiAgICB1cGRhdGVUYXNrc0Rpc3BsYXkocHJvamVjdHMsIHNvcnRlZExpc3QsIHNob3dQcm9qZWN0LCBmYWxzZSk7XG4gIH0pO1xuXG4gIGlmIChzaG93UHJvamVjdCkge1xuICAgIHRhc2tMaXN0SGVhZGVyRWwuY2xhc3NMaXN0LnJlbW92ZSgnbm90LXNob3ctcHJvamVjdC1uYW1lJyk7XG4gICAgdGFza0xpc3RIZWFkZXJFbC5jbGFzc0xpc3QuYWRkKCdzaG93LXByb2plY3QtbmFtZScpO1xuICAgIGNvbnN0IGhlYWRlclByb2plY3ROYW1lRWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbXSwge30sICdQcm9qZWN0ICcpO1xuICAgIHRhc2tMaXN0SGVhZGVyRWwuYXBwZW5kQ2hpbGQoaGVhZGVyUHJvamVjdE5hbWVFbCk7XG4gICAgY29uc3Qgc29ydEJ5UHJvamVjdEJ0biA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYnRuJyxcbiAgICAgIFtdLFxuICAgICAgeyBzdHlsZTogJ2N1cnNvcjogcG9pbnRlcicgfSxcbiAgICAgICfihpXvuI8nXG4gICAgKTtcbiAgICBoZWFkZXJQcm9qZWN0TmFtZUVsLmFwcGVuZENoaWxkKHNvcnRCeVByb2plY3RCdG4pO1xuICAgIHNvcnRCeVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBsaXN0ID0gZ2V0TGlzdChhY3RpdmVQcm9qZWN0LCBzaG93UHJvamVjdCk7XG4gICAgICBwcm9qZWN0QXNjZW5kID0gcHJvamVjdEFzY2VuZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgIC8vIFRvZG86IHNob3VsZCBzb3J0IGJ5IHByb2plY3QgbmFtZSwgbm90IHByb2plY3QgaW5kZXhcbiAgICAgIGNvbnN0IHNvcnRlZExpc3QgPSBzb3J0QnlLZXkobGlzdCwgJ3Byb2plY3RJbmRleCcsIHByb2plY3RBc2NlbmQpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3QnLCBKU09OLnN0cmluZ2lmeShzb3J0ZWRMaXN0KSk7XG4gICAgICB1cGRhdGVUYXNrc0Rpc3BsYXkocHJvamVjdHMsIHNvcnRlZExpc3QsIHNob3dQcm9qZWN0LCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBoZWFkZXJTdGFydERhdGVFbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFtdLCB7fSwgJ1N0YXJ0IERhdGUgJyk7XG4gIHRhc2tMaXN0SGVhZGVyRWwuYXBwZW5kQ2hpbGQoaGVhZGVyU3RhcnREYXRlRWwpO1xuICBjb25zdCBzb3J0QnlTdGFydERhdGVCdG4gPSBjcmVhdGVFbGVtZW50KFxuICAgICdidG4nLFxuICAgIFtdLFxuICAgIHsgc3R5bGU6ICdjdXJzb3I6IHBvaW50ZXInIH0sXG4gICAgJ+KGle+4jydcbiAgKTtcbiAgaGVhZGVyU3RhcnREYXRlRWwuYXBwZW5kQ2hpbGQoc29ydEJ5U3RhcnREYXRlQnRuKTtcbiAgc29ydEJ5U3RhcnREYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBnZXRMaXN0KGFjdGl2ZVByb2plY3QsIHNob3dQcm9qZWN0KTtcbiAgICBzdGFydERhdGVBc2NlbmQgPSBzdGFydERhdGVBc2NlbmQgPyBmYWxzZSA6IHRydWU7XG4gICAgY29uc3Qgc29ydGVkTGlzdCA9IHNvcnRCeUtleShsaXN0LCAnc3RhcnREYXRlJywgc3RhcnREYXRlQXNjZW5kKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdCcsIEpTT04uc3RyaW5naWZ5KHNvcnRlZExpc3QpKTtcbiAgICB1cGRhdGVUYXNrc0Rpc3BsYXkocHJvamVjdHMsIHNvcnRlZExpc3QsIHNob3dQcm9qZWN0LCBmYWxzZSk7XG4gIH0pO1xuXG4gIGNvbnN0IGhlYWRlckR1ZURhdGVFbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFtdLCB7fSwgJ0R1ZSBEYXRlICcpO1xuICB0YXNrTGlzdEhlYWRlckVsLmFwcGVuZENoaWxkKGhlYWRlckR1ZURhdGVFbCk7XG4gIGNvbnN0IHNvcnRCeUR1ZURhdGVCdG4gPSBjcmVhdGVFbGVtZW50KFxuICAgICdidG4nLFxuICAgIFtdLFxuICAgIHsgc3R5bGU6ICdjdXJzb3I6IHBvaW50ZXInIH0sXG4gICAgJ+KGle+4jydcbiAgKTtcbiAgaGVhZGVyRHVlRGF0ZUVsLmFwcGVuZENoaWxkKHNvcnRCeUR1ZURhdGVCdG4pO1xuICBzb3J0QnlEdWVEYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBnZXRMaXN0KGFjdGl2ZVByb2plY3QsIHNob3dQcm9qZWN0KTtcbiAgICBkdWVEYXRlQXNjZW5kID0gZHVlRGF0ZUFzY2VuZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICBjb25zdCBzb3J0ZWRMaXN0ID0gc29ydEJ5S2V5KGxpc3QsICdkdWVEYXRlJywgZHVlRGF0ZUFzY2VuZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3QnLCBKU09OLnN0cmluZ2lmeShzb3J0ZWRMaXN0KSk7XG4gICAgdXBkYXRlVGFza3NEaXNwbGF5KHByb2plY3RzLCBzb3J0ZWRMaXN0LCBzaG93UHJvamVjdCwgZmFsc2UpO1xuICB9KTtcbn07XG5cbmNvbnN0IHVwZGF0ZVRhc2tzRGlzcGxheSA9IChwcm9qZWN0cywgdGFza0xpc3QsIHNob3dQcm9qZWN0LCBjb21wbGV0ZWRWaWV3KSA9PiB7XG4gIGNvbnN0IHNob3dDb21wbGV0ZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaG93Q29tcGxldGVkJykpO1xuXG4gIC8vIERpc3BsYXkgdGhlIHRhc2tzIGxpc3QgYm9keVxuICBnbG9iYWwudGFza3NMaXN0RWwuaW5uZXJIVE1MID0gJyc7XG4gIGxldCByb3cgPSAwO1xuICB0YXNrTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgLy8gSW4gY2FzZSBvZiB0aGUgQ29tcGxldGVkIHZpZXcsIHNob3cgY29tcGxldGVkIHRhc2tzIGFueXdheXNcbiAgICBpZiAoIWNvbXBsZXRlZFZpZXcpIHtcbiAgICAgIGlmICghc2hvd0NvbXBsZXRlZCAmJiB0YXNrLnN0YXR1cyA9PT0gJ0RvbmUnKSByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFza0VsID0gY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgWyd0YXNrJ10sXG4gICAgICB7XG4gICAgICAgICdkYXRhLXByb2plY3RJbmRleCc6IHRhc2sucHJvamVjdEluZGV4LFxuICAgICAgICAnZGF0YS10YXNrSW5kZXgnOiB0YXNrLnRhc2tJbmRleCxcbiAgICAgIH0sXG4gICAgICAnJ1xuICAgICk7XG4gICAgaWYgKHNob3dQcm9qZWN0KSB7XG4gICAgICB0YXNrRWwuY2xhc3NMaXN0LmFkZCgnc2hvdy1wcm9qZWN0LW5hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza0VsLmNsYXNzTGlzdC5hZGQoJ25vdC1zaG93LXByb2plY3QtbmFtZScpO1xuICAgIH1cblxuICAgIGxldCBjb2wgPSAwO1xuICAgIGNvbnN0IHRhc2tGb2N1c0VsID0gY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgW10sXG4gICAgICB7ICdkYXRhLXJvdyc6IHJvdywgJ2RhdGEtY29sJzogY29sLCBzdHlsZTogJ2NvbG9yOiByZWQ7IHRleHQtYWxpZ246IGNlbnRlcid9LFxuICAgICAgJydcbiAgICApO1xuICAgIC8vIGlmICh0YXNrLmZvY3VzKSB7XG4gICAgLy8gICB0YXNrRm9jdXNFbC5jbGFzc0xpc3QuYWRkKCdtZGknLCAnbWRpLXdlYXRoZXItc3VubnknKTtcbiAgICAvLyAgIHRhc2tGb2N1c0VsLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHRhc2tGb2N1c0VsLmNsYXNzTGlzdC5hZGQoJ21kaScsICdtZGktYmx1cicpO1xuICAgIC8vIH1cbiAgICB0YXNrRm9jdXNFbC5pbm5lclRleHQgPSB0YXNrLmZvY3VzID8gJ+KAvO+4jycgOiAn8J+rpSc7XG4gICAgdGFza0VsLmFwcGVuZENoaWxkKHRhc2tGb2N1c0VsKTtcblxuICAgIGNvbCsrO1xuICAgIGNvbnN0IHRhc2tTdGF0dXNFbCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIFsnbWRpJywgZ2xvYmFsLnN0YXR1c0ljb25zW3Rhc2suc3RhdHVzXV0sXG4gICAgICB7XG4gICAgICAgICdkYXRhLXJvdyc6IHJvdyxcbiAgICAgICAgJ2RhdGEtY29sJzogY29sLFxuICAgICAgICAnZGF0YS1zdGF0dXNpbmRleCc6IGdsb2JhbC5zdGF0dXMuaW5kZXhPZih0YXNrLnN0YXR1cyksXG4gICAgICAgIHN0eWxlOiAndGV4dC1hbGlnbjogY2VudGVyJ1xuICAgICAgfSxcbiAgICAgICcnXG4gICAgKTtcbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza1N0YXR1c0VsKTtcblxuICAgIGNvbCsrO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkVsID0gY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgWydsaW1pdGVkLXRleHQnXSxcbiAgICAgIHsgJ2RhdGEtcm93Jzogcm93LCAnZGF0YS1jb2wnOiBjb2wgfSxcbiAgICAgIHRhc2suZGVzY3JpcHRpb25cbiAgICApO1xuICAgIGlmICh0YXNrLnN0YXR1cyA9PT0gJ2REb25lJykge1xuICAgICAgdGFza0Rlc2NyaXB0aW9uRWwuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgIH1cbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uRWwpO1xuXG4gICAgLy8gSWYgc2hvd2luZyBhIHZpZXcsIHJhdGhlciB0aGFuIGFuIGFjdGl2ZSBwcm9qZWN0XG4gICAgaWYgKHNob3dQcm9qZWN0KSB7XG4gICAgICBjb2wrKztcbiAgICAgIGxldCBwcm9qZWN0TmFtZSA9ICdub3QgYXNzaWduZWQnO1xuICAgICAgaWYgKCFpc05hTihOdW1iZXIodGFzay5wcm9qZWN0SW5kZXgpKSkge1xuICAgICAgICBwcm9qZWN0TmFtZSA9IHByb2plY3RzLnByb2plY3RzW3Rhc2sucHJvamVjdEluZGV4XS5uYW1lO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJvamVjdE5hbWVFbCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBbJ2xpbWl0ZWQtdGV4dCddLFxuICAgICAgICB7ICdkYXRhLXJvdyc6IHJvdywgJ2RhdGEtY29sJzogY29sIH0sXG4gICAgICAgIHByb2plY3ROYW1lXG4gICAgICApO1xuICAgICAgdGFza0VsLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWwpO1xuICAgIH1cblxuICAgIGNvbCsrO1xuICAgIGNvbnN0IHRhc2tTdGFydERhdGVFbCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIFtdLFxuICAgICAgeyAnZGF0YS1yb3cnOiByb3csICdkYXRhLWNvbCc6IGNvbCB9LFxuICAgICAgdGFzay5zdGFydERhdGVcbiAgICApO1xuICAgIGlmIChpc0JlZm9yZSh0YXNrLnN0YXJ0RGF0ZSwgMCkpIHtcbiAgICAgIHRhc2tTdGFydERhdGVFbC5jbGFzc0xpc3QuYWRkKCdkYXRlLXBhc3NlZCcpO1xuICAgIH1cbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza1N0YXJ0RGF0ZUVsKTtcblxuICAgIGNvbCsrO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlRWwgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBbXSxcbiAgICAgIHsgJ2RhdGEtcm93Jzogcm93LCAnZGF0YS1jb2wnOiBjb2wgfSxcbiAgICAgIHRhc2suZHVlRGF0ZVxuICAgICk7XG4gICAgaWYgKGlzQmVmb3JlKHRhc2suZHVlRGF0ZSwgMCkpIHtcbiAgICAgIHRhc2tEdWVEYXRlRWwuY2xhc3NMaXN0LmFkZCgnZGF0ZS1wYXNzZWQnKTtcbiAgICB9XG4gICAgdGFza0VsLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlRWwpO1xuICAgIHJvdysrO1xuXG4gICAgZ2xvYmFsLnRhc2tzTGlzdEVsLmFwcGVuZENoaWxkKHRhc2tFbCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgdXBkYXRlVGFza3NMaXN0SGVhZGVyLCB1cGRhdGVUYXNrc0Rpc3BsYXkgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgeyB1cGRhdGVUYXNrc0Rpc3BsYXkgfSBmcm9tICcuL2RvbS11cGRhdGVUYXNrc0Rpc3BsYXknO1xuaW1wb3J0IGlzQmVmb3JlICBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgdG9kYXlDbGlja0hhbmRsZXIgPSAocHJvamVjdHMpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBwcm9qZWN0cy5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGlzQmVmb3JlKHRhc2suc3RhcnREYXRlLCAwKSB8fCBpc0JlZm9yZSh0YXNrLmR1ZURhdGUsIDApKSB7XG4gICAgICAgIHRhc2sudGFza0luZGV4ID0gaW5kZXg7XG4gICAgICAgIGxpc3QucHVzaCh0YXNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xuICB1cGRhdGVUYXNrc0Rpc3BsYXkocHJvamVjdHMsIGxpc3QsIHRydWUpO1xufTtcblxuY29uc3QgbmV4dDdkYXlzQ2xpY2tIYW5kbGVyID0gKHByb2plY3RzKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBbXTtcbiAgcHJvamVjdHMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpc0JlZm9yZSh0YXNrLnN0YXJ0RGF0ZSwgNykgfHwgaXNCZWZvcmUodGFzay5kdWVEYXRlLCA3KSkge1xuICAgICAgICB0YXNrLnRhc2tJbmRleCA9IGluZGV4O1xuICAgICAgICBsaXN0LnB1c2godGFzayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdCcsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcbiAgdXBkYXRlVGFza3NEaXNwbGF5KHByb2plY3RzLCBsaXN0LCB0cnVlKTtcbn07XG5cbmNvbnN0IHVuZGF0ZWRDbGlja0hhbmRsZXIgPSAocHJvamVjdHMpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBwcm9qZWN0cy5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKCF0YXNrLnN0YXJ0RGF0ZSAmJiAhdGFzay5kdWVEYXRlKSB7XG4gICAgICAgIHRhc2sudGFza0luZGV4ID0gaW5kZXg7XG4gICAgICAgIGxpc3QucHVzaCh0YXNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xuICB1cGRhdGVUYXNrc0Rpc3BsYXkocHJvamVjdHMsIGxpc3QsIHRydWUsIHRydWUpO1xufTtcblxuY29uc3QgY29tcGxldGVkQ2xpY2tIYW5kbGVyID0gKHByb2plY3RzKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBbXTtcbiAgcHJvamVjdHMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIGlmICh0YXNrLnN0YXR1cyA9PT0gJ2REb25lJykge1xuICAgICAgICB0YXNrLnRhc2tJbmRleCA9IGluZGV4O1xuICAgICAgICBsaXN0LnB1c2godGFzayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdCcsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcbiAgdXBkYXRlVGFza3NEaXNwbGF5KHByb2plY3RzLCBsaXN0LCB0cnVlLCB0cnVlKTtcbn07XG5cbmNvbnN0IGFsbFRhc2tzQ2xpY2tIYW5kbGVyID0gKHByb2plY3RzKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBbXTtcbiAgcHJvamVjdHMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIHRhc2sudGFza0luZGV4ID0gaW5kZXg7XG4gICAgICBsaXN0LnB1c2godGFzayk7XG4gICAgfSk7XG4gIH0pO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdCcsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcbiAgdXBkYXRlVGFza3NEaXNwbGF5KHByb2plY3RzLCBsaXN0LCB0cnVlKTtcbn07XG5cbmV4cG9ydCB7XG4gIHRvZGF5Q2xpY2tIYW5kbGVyLFxuICBuZXh0N2RheXNDbGlja0hhbmRsZXIsXG4gIHVuZGF0ZWRDbGlja0hhbmRsZXIsXG4gIGNvbXBsZXRlZENsaWNrSGFuZGxlcixcbiAgYWxsVGFza3NDbGlja0hhbmRsZXIsXG59O1xuIiwiLy8gQ29uc3RhbnRzIHJlbGF0ZWQgdG8gdGFzayBzdGF0dXNcbmNvbnN0IHN0YXR1cyA9IFsnYVRvZG8nLCAnYkRvaW5nJywgJ2NXYWl0JywgJ2REb25lJ107XG5jb25zdCBzdGF0dXNJY29ucyA9IHtcbiAgYVRvZG86ICdtZGktY2hlY2tib3gtYmxhbmstY2lyY2xlLW91dGxpbmUnLFxuICBiRG9pbmc6ICdtZGktY2lyY2xlLWhhbGYtZnVsbCcsXG4gIGNXYWl0OiAnbWRpLXRpbWVyLXNhbmQnLFxuICBkRG9uZTogJ21kaS1jaGVja2JveC1tYXJrZWQtY2lyY2xlJyxcbn07XG5cbi8vIEdsb2JhbCBlbGVtZW50cyByZWZlcnJlZCB0byBpbiBtdWx0aXBsZSBqcyBmaWxlc1xuY29uc3QgcHJvamVjdExpc3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QnKTtcbmNvbnN0IHRhc2tzTGlzdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpO1xuXG5leHBvcnQgeyBzdGF0dXMsIHN0YXR1c0ljb25zLCBwcm9qZWN0TGlzdEVsLCB0YXNrc0xpc3RFbCB9O1xuIiwiaW1wb3J0IHNjcmVlbkNvbnRyb2xsZXIgZnJvbSAnLi9zY3JlZW5Db250cm9sbGVyJztcblxuc2NyZWVuQ29udHJvbGxlcigpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmNvbnN0IExpc3QgPSAobmFtZSwgZXhpc3RpbmdUYXNrcyA9IFtdKSA9PiB7XG4gIGNvbnN0IHRhc2tzID0gZXhpc3RpbmdUYXNrcyB8fCBbXTtcblxuICBjb25zdCBwcmludFRhc2tzID0gKCkgPT4ge1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHRhc2sudGl0bGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgLy8gcHJpbnRUYXNrcygpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIHRhc2sgZXhpc3RzIGluIHRoZSBsaXN0XG4gICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICAvLyBwcmludFRhc2tzKCk7XG4gIH07XG5cbiAgY29uc3QgbW92ZVRhc2sgPSAoaW5kZXgsIG5ld0xpc3QpID0+IHtcbiAgICBuZXdMaXN0LmFkZFRhc2sodGFza3NbaW5kZXhdKTtcbiAgICByZW1vdmVUYXNrKGluZGV4KTtcbiAgICAvLyBwcmludFRhc2tzKCk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVGFzayA9IChpbmRleCwgYXR0cmlidXRlLCB2YWx1ZSkgPT4ge1xuICAgIHN3aXRjaCAoYXR0cmlidXRlKSB7XG4gICAgICBjYXNlICdmb2N1cyc6XG4gICAgICAgIHRhc2tzW2luZGV4XS5mb2N1cyA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0YXR1cyc6XG4gICAgICAgIHRhc2tzW2luZGV4XS5zdGF0dXMgPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZXNjcmlwdGlvbic6XG4gICAgICAgIHRhc2tzW2luZGV4XS5kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0YXJ0RGF0ZSc6XG4gICAgICAgIHRhc2tzW2luZGV4XS5zdGFydERhdGUgPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkdWVEYXRlJzpcbiAgICAgICAgdGFza3NbaW5kZXhdLmR1ZURhdGUgPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwcm9qZWN0SW5kZXgnOlxuICAgICAgICB0YXNrc1tpbmRleF0ucHJvamVjdEluZGV4ID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgLy8gY29uc3QgcmVuYW1lTGlzdCA9IChuZXdOYW1lKSA9PiB7XG4gIC8vICAgbmFtZSA9IG5ld05hbWU7XG4gIC8vIH1cblxuICByZXR1cm4ge1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBzZXQgbmFtZShuZXdOYW1lKSB7XG4gICAgICBuYW1lID0gbmV3TmFtZTtcbiAgICB9LFxuICAgIGdldCB0YXNrcygpIHtcbiAgICAgIHJldHVybiB0YXNrcztcbiAgICB9LFxuICAgIGFkZFRhc2ssXG4gICAgdXBkYXRlVGFzayxcbiAgICByZW1vdmVUYXNrLFxuICAgIG1vdmVUYXNrLFxuICAgIHByaW50VGFza3MsXG4gICAgLy8gcmVuYW1lTGlzdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0JztcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG4gIC8vIEEgbGlzdCBvZiBwcm9qZWN0cyB0aGF0IHdpbGwgZWFjaCBjb250YWluIGEgbGlzdCBvZiB0YXNrc1xuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IHNhdmVQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucHJvamVjdHMgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0cyk7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgbmV3IHByb2plY3RcbiAgY29uc3QgYWRkUHJvamVjdCA9IChuYW1lLCBkYXRhKSA9PiB7XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gTGlzdChuYW1lKTtcbiAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBMaXN0KG5hbWUsIGRhdGEpO1xuICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9XG4gICAgc2F2ZVByb2plY3RzKCk7XG4gIH07XG5cbiAgLy8gQXNzaWduIGEgdGFzayB0byBhIHBhcnRpY3VsYXIgcHJvamVjdFxuICBjb25zdCBhZGRUYXNrVG9Qcm9qZWN0ID0gKHRhc2ssIHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LmFkZFRhc2sodGFzayk7XG4gICAgc2F2ZVByb2plY3RzKCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFza0Zyb21Qcm9qZWN0ID0gKGluZGV4LCBwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC5yZW1vdmVUYXNrKGluZGV4KTtcbiAgICBzYXZlUHJvamVjdHMoKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUYXNraW5Qcm9qZWN0ID0gKHByb2plY3QsIGluZGV4LCBhdHRyaWJ1dGUsIHZhbHVlKSA9PiB7XG4gICAgcHJvamVjdC51cGRhdGVUYXNrKGluZGV4LCBhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICBzYXZlUHJvamVjdHMoKTtcbiAgfTtcblxuICBjb25zdCBtb3ZlVGFza3RvUHJvamVjdCA9IChwcm9qZWN0LCBpbmRleCwgb3RoZXJQcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC5tb3ZlVGFzayhpbmRleCwgb3RoZXJQcm9qZWN0KTtcbiAgICBzYXZlUHJvamVjdHMoKTtcbiAgfTtcblxuICAvLyBTd2FwIHRoZSBvcmRlciBvZiAyIHByb2plY3RzXG4gIGNvbnN0IHN3YXBQcm9qZWN0ID0gKHgsIHkpID0+IHtcbiAgICBbcHJvamVjdHNbeF0sIHByb2plY3RzW3ldXSA9IFtwcm9qZWN0c1t5XSwgcHJvamVjdHNbeF1dO1xuICAgIHNhdmVQcm9qZWN0cygpO1xuICB9O1xuXG4gIC8vIENoYW5nZSB0aGUgbmFtZSBvZiB0aGUgcHJvamVjdFxuICBjb25zdCByZW5hbWVQcm9qZWN0ID0gKHByb2plY3QsIG5ld05hbWUpID0+IHtcbiAgICBwcm9qZWN0Lm5hbWUgPSBuZXdOYW1lO1xuICAgIHNhdmVQcm9qZWN0cygpO1xuICB9O1xuXG4gIC8vIFJlbW92ZSBhIG5ldyBwcm9qZWN0XG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNhdmVQcm9qZWN0cygpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkUHJvamVjdCxcbiAgICBhZGRUYXNrVG9Qcm9qZWN0LFxuICAgIGRlbGV0ZVRhc2tGcm9tUHJvamVjdCxcbiAgICB1cGRhdGVUYXNraW5Qcm9qZWN0LFxuICAgIG1vdmVUYXNrdG9Qcm9qZWN0LFxuICAgIHJlbW92ZVByb2plY3QsXG4gICAgc3dhcFByb2plY3QsXG4gICAgc2F2ZVByb2plY3RzLFxuICAgIHJlbmFtZVByb2plY3QsXG4gICAgZ2V0IHByb2plY3RzKCkge1xuICAgICAgcmV0dXJuIHByb2plY3RzO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cbmltcG9ydCAqIGFzIGdsb2JhbCBmcm9tICcuL2dsb2JhbENvbnN0YW50cyc7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQge1xuICB1cGRhdGVUYXNrc0xpc3RIZWFkZXIsXG4gIHVwZGF0ZVRhc2tzRGlzcGxheSxcbn0gZnJvbSAnLi9kb20tdXBkYXRlVGFza3NEaXNwbGF5JztcbmltcG9ydCB7XG4gIHRvZGF5Q2xpY2tIYW5kbGVyLFxuICBuZXh0N2RheXNDbGlja0hhbmRsZXIsXG4gIHVuZGF0ZWRDbGlja0hhbmRsZXIsXG4gIGNvbXBsZXRlZENsaWNrSGFuZGxlcixcbiAgYWxsVGFza3NDbGlja0hhbmRsZXIsXG59IGZyb20gJy4vZG9tLXZpZXdzJztcbmltcG9ydCB7IGFkZE5ld1Rhc2ssIHRhc2tMaXN0Q2xpY2tIYW5kbGVyIH0gZnJvbSAnLi9kb20tdGFza3MnO1xuaW1wb3J0IHtcbiAgYWRkTmV3UHJvamVjdCxcbiAgdXBkYXRlUHJvamVjdHNEaXNwbGF5LFxuICBwcm9qZWN0TGlzdENsaWNrSGFuZGxlcixcbn0gZnJvbSAnLi9kb20tcHJvamVjdHMnO1xuXG5jb25zdCBzY3JlZW5Db250cm9sbGVyID0gKCkgPT4ge1xuICAvLyBDcmVhdGUgYSBQcm9qZWN0cyBvYmplY3Qgd2l0aCBhbiBlbXB0eSBsaXN0IG9mIHByb2plY3RzXG4gIGNvbnN0IHByb2plY3RzID0gUHJvamVjdHMoKTtcbiAgLy8gUmVhZCBzYXZlZCBwcm9qZWN0cyBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZVxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gIGlmICghZGF0YSkge1xuICAgIC8vIElmIG5vIGRhdGEgZXhpc3RzLCBjcmVhdGUgYW4gZW1wdHkgSW5ib3hcbiAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KCdJbmJveCcpO1xuICB9IGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSwgcmVidWlsZCB0aGUgcHJvamVjdHNbXSBieSBjcmVhdGluZyBhIGxpc3Qgb2YgcHJvamVjdCBvYmplY3RzXG4gICAgLy8gYmFzZWQgb24gdGhlIHN0b3JlZCBuYW1lcyBhbmQgdGFza3NcbiAgICBkYXRhLmZvckVhY2goKHByb2plY3REYXRhKSA9PiB7XG4gICAgICBpZiAocHJvamVjdERhdGEpIHByb2plY3RzLmFkZFByb2plY3QocHJvamVjdERhdGEubmFtZSwgcHJvamVjdERhdGEudGFza3MpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gTWFrZSBJbmJveCB0aGUgYWN0aXZlUHJvamVjdFxuICBsZXQgYWN0aXZlUHJvamVjdCA9IHByb2plY3RzLnByb2plY3RzWzBdO1xuXG4gIC8vIERlZmF1bHQgdG8gc2hvdyBJbmJveFxuICBsZXQgc2hvd1ZpZXcgPSBmYWxzZTtcbiAgbGV0IGxpc3QgPSBbXTtcblxuICAvLyBSZWFkIHRoZSBzaG93IGNvbXBsZXRlZCB0YXNrcyBzZXR0aW5nIGZyb20gbG9jYWwgc3RvcmFnZVxuICBsZXQgc2hvd0NvbXBsZXRlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Nob3dDb21wbGV0ZWQnKSk7XG4gIGlmICghc2hvd0NvbXBsZXRlZCkgc2hvd0NvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIC8vIEV2ZW50IGxpc3RuZXJzXG4gIC8vIC0tLSB0aGUgZWxlbWVudHMgLS0tXG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuICBjb25zdCBzaG93Q29tcGxldGVkQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdy1jb21wbGV0ZWQnKTtcbiAgc2hvd0NvbXBsZXRlZENoZWNrYm94LmNoZWNrZWQgPSBzaG93Q29tcGxldGVkO1xuXG4gIGNvbnN0IGRpc2FibGVCdXR0b25zID0gKCkgPT4ge1xuICAgIGFkZFByb2plY3RCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGFkZFRhc2tCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHNob3dDb21wbGV0ZWRDaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XG4gIH07XG5cbiAgY29uc3QgZW5hYmxlQnV0dG9ucyA9ICgpID0+IHtcbiAgICBhZGRQcm9qZWN0QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgYWRkVGFza0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHNob3dDb21wbGV0ZWRDaGVja2JveC5kaXNhYmxlZCA9IGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUN1cnJlbnRWaWV3ID0gKCkgPT4ge1xuICAgIGlmIChzaG93Vmlldykge1xuICAgICAgbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3QnKSk7XG4gICAgICB1cGRhdGVUYXNrc0Rpc3BsYXkocHJvamVjdHMsIGxpc3QsIHNob3dWaWV3LCBzaG93VmlldyA9PT0gJ2NvbXBsZXRlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVUYXNrc0Rpc3BsYXkocHJvamVjdHMsIGFjdGl2ZVByb2plY3QudGFza3MpO1xuICAgIH1cbiAgfTtcblxuICAvLyBUaGUgYm9keVxuICBjb25zdCBib2R5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGJvZHlFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy8gQ2xpY2tpbmcgb24gYW55IGVsZW1lbnQgd2l0aCAnZGlzbWlzcycgd2lsbCByZWZyZXNoIHRoZSBwcm9qZWN0cyBhbmQgdGFza3MgbGlzdFxuICAgIC8vIFRoaXMgZGlzbWlzc2VzIGFueSBvcGVuIGFkZCB0YXNrLCBlZGl0IHRhc2sgYW5kIGFkZCBwcm9qZWN0IGZvcm1zXG4gICAgLy8gQWxzbyBlbmFibGVzIGFkZCB0YXNrLCBhZGQgcHJvamVjdCBhbmQgc2hvdyBjb21wbGV0ZWQgc2V0dGluZyBidXR0b25zL2NoZWNrYm94XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGlzbWlzcycpKSB7XG4gICAgICAvLyBEaXNtaXNzIGFueSB0YXNrIGJlaW5nIGVkaXRlZFxuICAgICAgdXBkYXRlQ3VycmVudFZpZXcoKTtcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFRoZSBhZGQgdGFzayBidXR0b25cbiAgLy8gXiBXaGVuIGFkZGluZyBhIG5ldyB0YXNrLCB0aGUgZm9ybSBpcyBkaXNtaXNzZWQgYnlcbiAgLy8gMS4gY2xpY2sgb24gdGhlIFN1Ym1pdCBidXR0b25cbiAgLy8gMi4gY2xpY2sgb24gYW55IGVsZW1lbnQgd2l0aCB0aGUgY2xhc3MgJ2Rpc21pc3MnXG4gIC8vIDMuIGNsaWNrIG9uIGEgcHJvamVjdCBpbiB0aGUgcHJvamVjdHMgbGlzdFxuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIERpc2FibGUgdGhlIGZvbGxvdyBlbGVtZW50cyB3aGVuIGFkZGluZyBhIG5ldyB0YXNrXG4gICAgLy8gVGhpcyBwcmV2ZW50cyBtdWx0aXBsZSBlbGVtZW50cyBhZGRlZCBvbiBzY3JlZW5cbiAgICBkaXNhYmxlQnV0dG9ucygpO1xuICAgIC8vIFdhaXQgdW50aWwgYSBuZXcgVGFzayBpcyBhZGRlZFxuICAgIGFkZE5ld1Rhc2socHJvamVjdHMsIGFjdGl2ZVByb2plY3QsIHNob3dWaWV3ICE9PSBmYWxzZSkudGhlbigoKSA9PiB7XG4gICAgICB1cGRhdGVDdXJyZW50VmlldygpO1xuICAgICAgLy8gQWZ0ZXIgYSBuZXcgdGFzayBpcyBjcmVhdGVkLCByZS0gZW5hYmxlIHRoZXNlIGRpc2FibGVkIGVsZW1lbnRzXG4gICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIFRoZSBhZGQgcHJvamVjdCBidXR0b25cbiAgLy8gXiBXaGVuIGFkZGluZyBhIG5ldyBwcm9qZWN0LCB0aGUgZm9ybSBpcyBkaXNtaXNzZWQgYnlcbiAgLy8gMS4gcHJlc3MgZW50ZXIgdG8gJ2NoYW5nZScgdGhlIG5hbWVcbiAgLy8gMi4gY2xpY2sgb24gYW55IGVsZW1lbnQgd2l0aCB0aGUgJ2Rpc21pc3MnIGNsYXNzXG4gIC8vIDMuIHByZXNzZSAnRXNjXCJcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkaXNhYmxlQnV0dG9ucygpO1xuICAgIGFkZE5ld1Byb2plY3QocHJvamVjdHMpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0cy5wcm9qZWN0c1twcm9qZWN0cy5wcm9qZWN0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgdXBkYXRlUHJvamVjdHNEaXNwbGF5KHByb2plY3RzLCBhY3RpdmVQcm9qZWN0KTtcbiAgICAgICAgdXBkYXRlVGFza3NEaXNwbGF5KHByb2plY3RzLCBhY3RpdmVQcm9qZWN0LnRhc2tzKTtcbiAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIH0pO1xuICB9KTtcblxuICAvLyBUaGUgcHJvamVjdHMgbGlzdFxuICBnbG9iYWwucHJvamVjdExpc3RFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcHJvamVjdExpc3RDbGlja0hhbmRsZXIoZSwgcHJvamVjdHMpLnRoZW4oKGluZGV4KSA9PiB7XG4gICAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdHMucHJvamVjdHNbaW5kZXhdO1xuICAgICAgdXBkYXRlUHJvamVjdHNEaXNwbGF5KHByb2plY3RzLCBhY3RpdmVQcm9qZWN0KTtcbiAgICAgIHNob3dWaWV3ID0gZmFsc2U7XG4gICAgICByZW1vdmVWaWV3SGlnaGxpZ2h0KCk7XG4gICAgICB1cGRhdGVUYXNrc0xpc3RIZWFkZXIocHJvamVjdHMsIGFjdGl2ZVByb2plY3QsIHNob3dWaWV3ICE9PSBmYWxzZSk7XG4gICAgICB1cGRhdGVUYXNrc0Rpc3BsYXkocHJvamVjdHMsIGFjdGl2ZVByb2plY3QudGFza3MsIHNob3dWaWV3KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gVGhlIHRhc2tzIGxsaXN0XG4gIC8vIF4gVGhlIGVkaXQgZm9ybSBpcyBkaXNtaXNzIGJ5OlxuICAvLyAxLiBjaGFuZ2Ugb25lIGF0dHJpYnV0ZSBvZiBhIHRhc2tcbiAgLy8gMi4gY2xpY2sgb24gYW55IGVsZW1lbnRzIHdpdGggJ2Rpc21pc3MnIGNsYXNzXG4gIC8vIDMuIGNsaWNrIG9uIGEgcHJvamVjdFxuICBnbG9iYWwudGFza3NMaXN0RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vIFJlZnJlc2ggdGhlIHByb2plY3QgbGlzdCwgaW4gY2FzZSBhbiBhZGQgcHJvamVjdCBmb3JtIGlzIG9wZW5cbiAgICB1cGRhdGVQcm9qZWN0c0Rpc3BsYXkocHJvamVjdHMsIGFjdGl2ZVByb2plY3QpO1xuXG4gICAgY29uc3QgeyByb3cgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgY29uc3QgeyBjb2wgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgLy8gSWdub3JlczpcbiAgICAvLyAtIGNsaWNrIG9uIHRoZSBtYXJnaW4gb2YgYSB0YXNrXG4gICAgLy8gLSBjbGljayBvbiB0aGUgZW1wdHkgc3BhY2Ugb3IgdGhlIHN1Ym1pdCBidXR0b24gb2YgYWRkIHRhc2tcbiAgICAvLyAtIGNsaWNrIG9uIGlucHV0IGZpbGVkcyBvZiBlZGl0aW5nIGEgdGFza1xuICAgIGlmICghcm93IHx8ICFjb2wpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkaXNhYmxlQnV0dG9ucygpO1xuXG4gICAgLy8gRGlzbWlzcyBhbnkgdGFzayBiZWluZyBlZGl0ZWRcbiAgICB1cGRhdGVDdXJyZW50VmlldygpO1xuXG4gICAgdGFza0xpc3RDbGlja0hhbmRsZXIoXG4gICAgICByb3csXG4gICAgICBjb2wsXG4gICAgICBwcm9qZWN0cyxcbiAgICAgIGFjdGl2ZVByb2plY3QsXG4gICAgICBzaG93VmlldyAhPT0gZmFsc2VcbiAgICApLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHNob3dWaWV3KSB7XG4gICAgICAgIC8vIFVwZGF0ZSBsaXN0LCBvdGhlcndpc2UgZWRpdHMgYXJlIG5vdCB2aXNpYmxlXG4gICAgICAgIHN3aXRjaCAoc2hvd1ZpZXcpIHtcbiAgICAgICAgICBjYXNlICd0b2RheSc6XG4gICAgICAgICAgICB0b2RheUNsaWNrSGFuZGxlcihwcm9qZWN0cyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICduZXh0N2RheXMnOlxuICAgICAgICAgICAgbmV4dDdkYXlzQ2xpY2tIYW5kbGVyKHByb2plY3RzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3VuZGF0ZWQnOlxuICAgICAgICAgICAgdW5kYXRlZENsaWNrSGFuZGxlcihwcm9qZWN0cyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjb21wbGV0ZWQnOlxuICAgICAgICAgICAgY29tcGxldGVkQ2xpY2tIYW5kbGVyKHByb2plY3RzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2FsbFRhc2tzJzpcbiAgICAgICAgICAgIGFsbFRhc2tzQ2xpY2tIYW5kbGVyKHByb2plY3RzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdXBkYXRlQ3VycmVudFZpZXcoKTtcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gVGhlIHNob3cgY29tcGxldGVkIHRhc2tzIGNoZWNrYm94XG4gIHNob3dDb21wbGV0ZWRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgc2hvd0NvbXBsZXRlZCA9IHNob3dDb21wbGV0ZWRDaGVja2JveC5jaGVja2VkO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzaG93Q29tcGxldGVkJywgSlNPTi5zdHJpbmdpZnkoc2hvd0NvbXBsZXRlZCkpO1xuICAgIHVwZGF0ZUN1cnJlbnRWaWV3KCk7XG4gIH0pO1xuXG4gIC8vIFZpZXdzXG4gIGNvbnN0IHRvZGF5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKTtcbiAgY29uc3QgbmV4dDdkYXlzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV4dDdkYXlzJyk7XG4gIGNvbnN0IHVuZGF0ZWRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bmRhdGVkJyk7XG4gIGNvbnN0IGNvbXBsZXRlZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBsZXRlZCcpO1xuICBjb25zdCBhbGxUYXNrc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbC10YXNrcycpO1xuXG4gIC8vIENsZWFyIGhpZ2hsaWdodCBpbiBWaWV3c1xuICBjb25zdCByZW1vdmVWaWV3SGlnaGxpZ2h0ID0gKCkgPT4ge1xuICAgIHRvZGF5RWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXZpZXcnKTtcbiAgICBuZXh0N2RheXNFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdmlldycpO1xuICAgIHVuZGF0ZWRFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdmlldycpO1xuICAgIGNvbXBsZXRlZEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS12aWV3Jyk7XG4gICAgYWxsVGFza3NFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdmlldycpO1xuICB9O1xuXG4gIC8vIFRoZSB2aWV3cyBldmVudCBsaXN0ZW5lcnNcbiAgdG9kYXlFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyBSZW1vdmUgaGlnaGxpZ2h0IG9mIGFjdGl2ZSBwcm9qZWN0LCBieSB1cGRhdGluZyB3aXRob3V0IGFjdGl2ZVByb2plY3RcbiAgICBhY3RpdmVQcm9qZWN0ID0gbnVsbDtcbiAgICB1cGRhdGVQcm9qZWN0c0Rpc3BsYXkocHJvamVjdHMpO1xuICAgIHJlbW92ZVZpZXdIaWdobGlnaHQoKTtcbiAgICB0b2RheUVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS12aWV3Jyk7XG4gICAgc2hvd1ZpZXcgPSAndG9kYXknO1xuICAgIHVwZGF0ZVRhc2tzTGlzdEhlYWRlcihwcm9qZWN0cywgYWN0aXZlUHJvamVjdCwgc2hvd1ZpZXcgIT09IGZhbHNlKTtcbiAgICB0b2RheUNsaWNrSGFuZGxlcihwcm9qZWN0cyk7XG4gIH0pO1xuXG4gIG5leHQ3ZGF5c0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIFJlbW92ZSBoaWdobGlnaHQgb2YgYWN0aXZlIHByb2plY3QsIGJ5IHVwZGF0aW5nIHdpdGhvdXQgYWN0aXZlUHJvamVjdFxuICAgIHVwZGF0ZVByb2plY3RzRGlzcGxheShwcm9qZWN0cyk7XG4gICAgcmVtb3ZlVmlld0hpZ2hsaWdodCgpO1xuICAgIG5leHQ3ZGF5c0VsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS12aWV3Jyk7XG4gICAgc2hvd1ZpZXcgPSAnbmV4dDdkYXlzJztcbiAgICB1cGRhdGVUYXNrc0xpc3RIZWFkZXIocHJvamVjdHMsIGFjdGl2ZVByb2plY3QsIHNob3dWaWV3ICE9PSBmYWxzZSk7XG4gICAgbmV4dDdkYXlzQ2xpY2tIYW5kbGVyKHByb2plY3RzKTtcbiAgfSk7XG5cbiAgdW5kYXRlZEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIFJlbW92ZSBoaWdobGlnaHQgb2YgYWN0aXZlIHByb2plY3QsIGJ5IHVwZGF0aW5nIHdpdGhvdXQgYWN0aXZlUHJvamVjdFxuICAgIHVwZGF0ZVByb2plY3RzRGlzcGxheShwcm9qZWN0cyk7XG4gICAgcmVtb3ZlVmlld0hpZ2hsaWdodCgpO1xuICAgIHVuZGF0ZWRFbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdmlldycpO1xuICAgIHNob3dWaWV3ID0gJ3VuZGF0ZWQnO1xuICAgIHVwZGF0ZVRhc2tzTGlzdEhlYWRlcihwcm9qZWN0cywgYWN0aXZlUHJvamVjdCwgc2hvd1ZpZXcgIT09IGZhbHNlKTtcbiAgICB1bmRhdGVkQ2xpY2tIYW5kbGVyKHByb2plY3RzKTtcbiAgfSk7XG5cbiAgY29tcGxldGVkRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gUmVtb3ZlIGhpZ2hsaWdodCBvZiBhY3RpdmUgcHJvamVjdCwgYnkgdXBkYXRpbmcgd2l0aG91dCBhY3RpdmVQcm9qZWN0XG4gICAgdXBkYXRlUHJvamVjdHNEaXNwbGF5KHByb2plY3RzKTtcbiAgICByZW1vdmVWaWV3SGlnaGxpZ2h0KCk7XG4gICAgY29tcGxldGVkRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXZpZXcnKTtcbiAgICBzaG93VmlldyA9ICdjb21wbGV0ZWQnO1xuICAgIHVwZGF0ZVRhc2tzTGlzdEhlYWRlcihwcm9qZWN0cywgYWN0aXZlUHJvamVjdCwgc2hvd1ZpZXcgIT09IGZhbHNlKTtcbiAgICBjb21wbGV0ZWRDbGlja0hhbmRsZXIocHJvamVjdHMpO1xuICB9KTtcblxuICBhbGxUYXNrc0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIFJlbW92ZSBoaWdobGlnaHQgb2YgYWN0aXZlIHByb2plY3QsIGJ5IHVwZGF0aW5nIHdpdGhvdXQgYWN0aXZlUHJvamVjdFxuICAgIHVwZGF0ZVByb2plY3RzRGlzcGxheShwcm9qZWN0cyk7XG4gICAgcmVtb3ZlVmlld0hpZ2hsaWdodCgpO1xuICAgIGFsbFRhc2tzRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXZpZXcnKTtcbiAgICBzaG93VmlldyA9ICdhbGxUYXNrcyc7XG4gICAgdXBkYXRlVGFza3NMaXN0SGVhZGVyKHByb2plY3RzLCBhY3RpdmVQcm9qZWN0LCBzaG93VmlldyAhPT0gZmFsc2UpO1xuICAgIGFsbFRhc2tzQ2xpY2tIYW5kbGVyKHByb2plY3RzKTtcbiAgfSk7XG5cbiAgdXBkYXRlUHJvamVjdHNEaXNwbGF5KHByb2plY3RzLCBhY3RpdmVQcm9qZWN0KTtcbiAgdXBkYXRlVGFza3NMaXN0SGVhZGVyKHByb2plY3RzLCBhY3RpdmVQcm9qZWN0LCBzaG93VmlldyAhPT0gZmFsc2UpO1xuICB1cGRhdGVUYXNrc0Rpc3BsYXkocHJvamVjdHMsIGFjdGl2ZVByb2plY3QudGFza3MsIHNob3dWaWV3KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNjcmVlbkNvbnRyb2xsZXI7XG4iLCJjb25zdCBUYXNrID0gKGZvY3VzLCBzdGF0dXMsIGRlc2NyaXB0aW9uLCBzdGFydERhdGUsIGR1ZURhdGUsIHByb2plY3RJbmRleCwgdGFza0luZGV4KSA9PiAoe1xuICBmb2N1cyxcbiAgc3RhdHVzLFxuICBkZXNjcmlwdGlvbixcbiAgc3RhcnREYXRlLFxuICBkdWVEYXRlLFxuICBwcm9qZWN0SW5kZXgsXG4gIHRhc2tJbmRleCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiZnVuY3Rpb24gaXNCZWZvcmUoZGF0ZVN0cmluZywgZGF5cykge1xuICAvLyBQYXJzZSB0aGUgaW5wdXQgZGF0ZSBzdHJpbmcgaW50byBhIERhdGUgb2JqZWN0XG4gIGNvbnN0IGlucHV0RGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICBpZiAoIWlucHV0RGF0ZSkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIEdldCB0b2RheSdzIGRhdGVcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gIGNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSB0b2RheS5nZXRUaW1lKCk7XG5cbiAgY29uc3QgZnV0dXJlRGF0ZSA9IGN1cnJlbnRUaW1lc3RhbXAgKyBkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuICBjb25zdCBkYXlzTGF0ZXIgPSBuZXcgRGF0ZShmdXR1cmVEYXRlKTtcblxuICAvLyBTZXQgdGhlIHRpbWUgcGFydCBvZiBib3RoIGRhdGVzIHRvIDAwOjAwOjAwIHRvIGNvbXBhcmUgb25seSB0aGUgZGF0ZXNcbiAgaW5wdXREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICB0b2RheS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAvLyBDb21wYXJlIHRoZSBkYXRlc1xuICBpZiAoaW5wdXREYXRlIDwgZGF5c0xhdGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0JlZm9yZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==