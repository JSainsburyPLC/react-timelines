"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Marker = function Marker(_ref) {
  var x = _ref.x,
      modifier = _ref.modifier,
      children = _ref.children;
  return _react2.default.createElement(
    "div",
    {
      className: "marker marker--" + modifier,
      style: { left: x + "px" }
    },
    _react2.default.createElement(
      "div",
      { className: "marker__label" },
      _react2.default.createElement(
        "div",
        { className: "marker__content" },
        children
      )
    )
  );
};

Marker.propTypes = {
  x: _react.PropTypes.number.isRequired,
  modifier: _react.PropTypes.string.isRequired,
  children: _react.PropTypes.node
};

exports.default = Marker;
module.exports = exports["default"];