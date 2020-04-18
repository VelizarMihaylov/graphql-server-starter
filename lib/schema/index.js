"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = exports.resolvers = void 0;

var _Articles = require("./queries/Articles");

var _Article = require("./queries/Article");

var _NewsCategories = require("./queries/NewsCategories");

var _apolloServerKoa = require("apollo-server-koa");

const resolvers = {
  Query: {
    article: _Article.article,
    articles: _Articles.articles,
    newsCategories: _NewsCategories.newsCategories
  }
};
exports.resolvers = resolvers;
const typeDefs = _apolloServerKoa.gql`
  ${_Article.Article}
  ${_NewsCategories.NewsCategory}

  type Query {
    article(url: String!): Article
    articles(
      businessUnit: [String]!
      audience: [String]!
      newsType: [String]
      from: String
      to: String
    ): [Article]
    newsCategories: [NewsCategory]
  }
`;
exports.typeDefs = typeDefs;