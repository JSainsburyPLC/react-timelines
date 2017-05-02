"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Segment = function Segment(_ref) {
  var time = _ref.time,
      offsetX = _ref.offsetX,
      start = _ref.start,
      end = _ref.end,
      style = _ref.style;

  var left = time.toX(start) - offsetX;
  var width = time.toX(end) - left - offsetX;
  var segmentStyle = (0, _extends3.default)({}, style, {
    left: left,
    width: width
  });
  return _react2.default.createElement("div", { className: "segmented__segment", style: segmentStyle });
};

Segment.propTypes = {
  time: _react.PropTypes.shape({}).isRequired,
  offsetX: _react.PropTypes.number.isRequired,
  start: _react.PropTypes.instanceOf(Date).isRequired,
  end: _react.PropTypes.instanceOf(Date).isRequired,
  style: _react.PropTypes.shape({})
};

// eslint-disable-next-line no-unused-vars
var Segmented = function Segmented(_ref2) {
  var time = _ref2.time,
      title = _ref2.title,
      start = _ref2.start,
      end = _ref2.end,
      tooltip = _ref2.tooltip,
      segments = _ref2.segments;

  var offsetX = time.toX(start);
  return _react2.default.createElement(
    "div",
    { className: "element segmented" },
    segments.map(function (segment) {
      return _react2.default.createElement(Segment, (0, _extends3.default)({
        key: segment.id
      }, segment, {
        offsetX: offsetX,
        time: time
      }));
    }),
    _react2.default.createElement(
      "div",
      { className: "element__title" },
      title
    )
  );
};

Segmented.propTypes = {
  time: _react.PropTypes.shape({}).isRequired,
  title: _react.PropTypes.string,
  start: _react.PropTypes.instanceOf(Date),
  end: _react.PropTypes.instanceOf(Date),
  tooltip: _react.PropTypes.string,
  segments: _react.PropTypes.arrayOf(_react.PropTypes.shape({ id: _react.PropTypes.string.isRequired })).isRequired
};

exports.default = Segmented;
module.exports = exports["default"];