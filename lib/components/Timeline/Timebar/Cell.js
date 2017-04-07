"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cell = function Cell(_ref) {
  var time = _ref.time,
      id = _ref.id,
      title = _ref.title,
      start = _ref.start;
  return _react2.default.createElement(
    "div",
    {
      className: "timebar__cell",
      style: { left: time.toX(start) + "px" }
    },
    title
  );
};

Cell.propTypes = {
  time: _react.PropTypes.shape({}),
  id: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string.isRequired,
  start: _react.PropTypes.instanceOf(Date).isRequired
};

exports.default = Cell;
module.exports = exports["default"];