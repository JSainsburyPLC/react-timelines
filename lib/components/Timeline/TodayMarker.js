'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Marker = require('./Marker');

var _Marker2 = _interopRequireDefault(_Marker);

var _datePropType = require('../../utils/datePropType');

var _datePropType2 = _interopRequireDefault(_datePropType);

var _getMonth = require('../../utils/getMonth');

var _getMonth2 = _interopRequireDefault(_getMonth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodayMarker = function TodayMarker(_ref) {
  var now = _ref.now,
      time = _ref.time;
  return _react2.default.createElement(
    _Marker2.default,
    { date: now, time: time },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        null,
        'Today'
      ),
      _react2.default.createElement(
        'strong',
        null,
        now.getDate() + ' ' + (0, _getMonth2.default)(now)
      )
    )
  );
};

TodayMarker.propTypes = {
  time: _react.PropTypes.shape({}).isRequired,
  now: _datePropType2.default
};

exports.default = TodayMarker;
module.exports = exports['default'];