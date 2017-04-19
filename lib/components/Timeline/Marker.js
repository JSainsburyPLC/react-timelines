'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _datePropType = require('../../utils/datePropType');

var _datePropType2 = _interopRequireDefault(_datePropType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Marker = function Marker(_ref) {
  var time = _ref.time,
      date = _ref.date,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'marker', style: time.toStyleLeft(date) },
    _react2.default.createElement(
      'div',
      { className: 'marker__label' },
      _react2.default.createElement(
        'div',
        { className: 'marker__content' },
        children
      )
    )
  );
};

Marker.propTypes = {
  time: _react.PropTypes.shape({}).isRequired,
  date: _datePropType2.default,
  children: _react.PropTypes.node
};

exports.default = Marker;
module.exports = exports['default'];