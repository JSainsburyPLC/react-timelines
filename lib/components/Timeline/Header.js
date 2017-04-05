"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    "div",
    { className: "timeline__header" },
    _react2.default.createElement(
      "div",
      { className: "timebar" },
      _react2.default.createElement(
        "div",
        { className: "timebar__row" },
        "Timebar row 1"
      ),
      _react2.default.createElement(
        "div",
        { className: "timebar__row" },
        "Timebar row 2"
      ),
      _react2.default.createElement(
        "div",
        { className: "timebar__row" },
        "Timebar row 3"
      )
    )
  );
};

exports.default = Header;
module.exports = exports["default"];