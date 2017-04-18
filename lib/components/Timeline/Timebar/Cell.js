'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _datePropType = require('../../../utils/datePropType');

var _datePropType2 = _interopRequireDefault(_datePropType);

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
  time: _react.PropTypes.shape({}),
  title: _react.PropTypes.string.isRequired,
  start: _datePropType2.default,
  end: _datePropType2.default
};

exports.default = Cell;
module.exports = exports['default'];