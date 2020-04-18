"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Article = require("./Article");

Object.keys(_Article).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Article[key];
    }
  });
});

var _ArticleApiResponse = require("./ArticleApiResponse");

Object.keys(_ArticleApiResponse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ArticleApiResponse[key];
    }
  });
});

var _NewsCategories = require("./NewsCategories");

Object.keys(_NewsCategories).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _NewsCategories[key];
    }
  });
});

var _NewsCategoriesApiResponse = require("./NewsCategoriesApiResponse");

Object.keys(_NewsCategoriesApiResponse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _NewsCategoriesApiResponse[key];
    }
  });
});