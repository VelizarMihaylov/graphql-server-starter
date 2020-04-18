"use strict";

require("module-alias/register");

var _server = _interopRequireDefault(require("./server"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = process.env.PORT || 4445;

_server.default.applyMiddleware({
  app: _app.default
});

_app.default.listen({
  port
}, () => console.log(`🚀 Server ready at http://localhost:${port}${_server.default.graphqlPath}`));