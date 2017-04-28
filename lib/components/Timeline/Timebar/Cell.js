'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cell = function Cell(_ref) {
  var time = _ref.time,
      title = _ref.title,
      start = _ref.start,
      end = _ref.end;
  return _react2.default.createElement(
    'div',
    {
      className: 'timebar__cell',
      style: time.toStyleLeftAndWidth(start, end)
    },
    title
  );
};

Cell.propTypes = {
  time: _propTypes2.default.shape({}),
  title: _propTypes2.default.string.isRequired,
  start: _propTypes2.default.instanceOf(Date).isRequired,
  end: _propTypes2.default.instanceOf(Date).isRequired
};

exports.default = Cell;
module.exports = exports['default'];