"use strict";

require("module-alias/register");

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = process.env.PORT || 4445;

_app.default.listen({
  port
}, () => console.log(`🚀 Server ready at http://localhost:${port}`));