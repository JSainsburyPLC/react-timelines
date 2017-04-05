"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function Body() {
  return _react2.default.createElement(
    "div",
    { className: "sidebar__body" },
    _react2.default.createElement(
      "div",
      { className: "track-key" },
      "Track key 1"
    ),
    _react2.default.createElement(
      "div",
      { className: "track-key" },
      "Track key 2"
    )
  );
};

exports.default = Body;
module.exports = exports["default"];