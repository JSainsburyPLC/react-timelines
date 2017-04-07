'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tracks = require('./Tracks');

var _Tracks2 = _interopRequireDefault(_Tracks);

var _Now = require('./Now');

var _Now2 = _interopRequireDefault(_Now);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function Body(_ref) {
  var now = _ref.now,
      time = _ref.time,
      tracks = _ref.tracks;
  return _react2.default.createElement(
    'div',
    { className: 'timeline__body' },
    _react2.default.createElement(_Tracks2.default, { time: time, tracks: tracks }),
    now && _react2.default.createElement(_Now2.default, { now: now, time: time })
  );
};

Body.propTypes = {
  now: _react.PropTypes.instanceOf(Date),
  time: _react.PropTypes.shape({}).isRequired,
  tracks: _react.PropTypes.arrayOf(_react.PropTypes.shape({}))
};

exports.default = Body;
module.exports = exports['default'];