"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataSources = require("./data-sources");

var _schema = require("../schema");

var _apolloServerKoa = require("apollo-server-koa");

const server = new _apolloServerKoa.ApolloServer({
  resolvers: _schema.resolvers,
  typeDefs: _schema.typeDefs,
  dataSources: () => ({
    dotCMS: new _dataSources.DotCMS()
  })
});
var _default = server;
exports.default = _default;