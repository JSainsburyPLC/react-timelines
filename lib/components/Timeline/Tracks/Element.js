'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Basic = require('../../Elements/Basic');

var _Basic2 = _interopRequireDefault(_Basic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Element = function Element(_ref) {
  var time = _ref.time,
      style = _ref.style,
      id = _ref.id,
      title = _ref.title,
      start = _ref.start,
      end = _ref.end,
      tooltip = _ref.tooltip;
  return _react2.default.createElement(
    'div',
    {
      key: id,
      className: 'track__element',
      style: time.toStyleLeftAndWidth(start, end)
    },
    _react2.default.createElement(_Basic2.default, {
      tooltip: tooltip,
      title: title,
      start: start,
      end: end,
      style: (0, _extends3.default)({}, style)
    })
  );
};

Element.propTypes = {
  time: _propTypes2.default.shape({}).isRequired,
  style: _propTypes2.default.shape({}),
  id: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string,
  start: _propTypes2.default.instanceOf(Date).isRequired,
  end: _propTypes2.default.instanceOf(Date).isRequired,
  tooltip: _propTypes2.default.string
};

exports.default = Element;
module.exports = exports['default'];