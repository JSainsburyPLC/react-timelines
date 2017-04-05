"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Widget = function Widget() {
  return _react2.default.createElement(
    "p",
    { className: "my-widget" },
    "Lol, widget! Working well!"
  );
};

exports.default = Widget;
module.exports = exports["default"];