"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Now = function Now(_ref) {
  var time = _ref.time,
      now = _ref.now;
  return _react2.default.createElement("div", { className: "timeline__time", style: time.toStyleLeft(now) });
};

Now.propTypes = {
  time: _react.PropTypes.shape({}).isRequired,
  now: _react.PropTypes.instanceOf(Date).isRequired
};

exports.default = Now;
module.exports = exports["default"];