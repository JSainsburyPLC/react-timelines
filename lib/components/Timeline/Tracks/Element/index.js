"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Element = function Element(_ref) {
  var title = _ref.title,
      style = _ref.style;
  return _react2.default.createElement(
    "div",
    { className: "element", style: style },
    title
  );
};

Element.propTypes = {
  title: _react.PropTypes.string,
  style: _react.PropTypes.shape({})
};

exports.default = Element;
module.exports = exports["default"];