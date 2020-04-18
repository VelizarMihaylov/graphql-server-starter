"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  DotCMS: true
};
Object.defineProperty(exports, "DotCMS", {
  enumerable: true,
  get: function () {
    return _DotCMS.default;
  }
});

var _DotCMS = _interopRequireDefault(require("./DotCMS"));

var _commonTypes = require("./DotCMS/common-types");

Object.keys(_commonTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _commonTypes[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }