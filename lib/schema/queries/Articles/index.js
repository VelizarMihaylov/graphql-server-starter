"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.articles = void 0;

const articles = async (obj, {
  businessUnit,
  audience,
  newsType,
  from,
  to
}, {
  dataSources: {
    dotCMS
  }
}) => dotCMS.getArticles({
  businessUnit,
  audience,
  newsType,
  from,
  to
});

exports.articles = articles;