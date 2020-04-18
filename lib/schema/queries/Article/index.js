"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Article = exports.article = void 0;

var _apolloServerKoa = require("apollo-server-koa");

const article = async (obj, {
  url
}, {
  dataSources: {
    dotCMS
  }
}) => dotCMS.getArticle({
  url
});

exports.article = article;
const Article = _apolloServerKoa.gql`
  type BynderImage {
    id: String
    url: String
    title: String
    altText: String
    caption: String
  }

  type Article {
    title: String
    body: String
    published: String
    updated: String
    teaser: String
    category: String
    baseType: String
    channel: String
    author: String
    url: String
    image: String
    bynderImage: BynderImage
    inode: String
  }
`;
exports.Article = Article;