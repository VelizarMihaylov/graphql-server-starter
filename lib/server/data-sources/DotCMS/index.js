"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloDatasourceRest = require("apollo-datasource-rest");

var _compose = _interopRequireDefault(require("lodash/fp/compose"));

var _Articles = _interopRequireDefault(require("./Articles"));

var _Article = _interopRequireDefault(require("./Article"));

var _NewsCategories = _interopRequireDefault(require("./NewsCategories"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DotCMS extends (0, _compose.default)(_Articles.default, _Article.default, _NewsCategories.default)(_apolloDatasourceRest.RESTDataSource) {
  constructor() {
    super();
    this.baseURL = `${process.env.DOT_CMS_URL}/api/es/search`;
    this.token = process.env.DOT_CMS_TOKEN;
  }

}

var _default = DotCMS;
exports.default = _default;