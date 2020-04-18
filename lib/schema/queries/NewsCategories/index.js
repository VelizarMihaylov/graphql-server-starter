"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsCategory = exports.newsCategories = void 0;

var _apolloServerKoa = require("apollo-server-koa");

const newsCategories = async (obj, undefined, {
  dataSources: {
    dotCMS
  }
}) => dotCMS.getNewsCategories();

exports.newsCategories = newsCategories;
const NewsCategory = _apolloServerKoa.gql`
  type NewsCategoryItem {
    name: String
    key: String
    variable: String
  }

  type NewsCategory {
    name: String
    key: String
    variable: String
    items: [NewsCategoryItem]
  }
`;
exports.NewsCategory = NewsCategory;