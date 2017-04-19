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
      now = _ref.now;
  return _react2.default.createElement('div', { className: 'timeline__time', style: time.toStyleLeft(now) });
};

Marker.propTypes = {
  time: _react.PropTypes.shape({}).isRequired,
  now: _datePropType2.default
};

exports.default = Marker;
module.exports = exports['default'];