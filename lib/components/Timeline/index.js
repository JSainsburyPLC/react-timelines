'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('./Body');

var _Body2 = _interopRequireDefault(_Body);

var _datePropType = require('../../utils/datePropType');

var _datePropType2 = _interopRequireDefault(_datePropType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Timeline = function Timeline(_ref) {
  var now = _ref.now,
      time = _ref.time,
      timebar = _ref.timebar,
      tracks = _ref.tracks;
  return _react2.default.createElement(
    'div',
    { className: 'timeline' },
    _react2.default.createElement(
      'div',
      { style: { width: time.timelineWidth + 'px' } },
      _react2.default.createElement(_Header2.default, { time: time, timebar: timebar }),
      _react2.default.createElement(_Body2.default, { now: now, time: time, tracks: tracks })
    )
  );
};

Timeline.propTypes = {
  now: _datePropType2.default,
  time: _react.PropTypes.shape({}).isRequired,
  timebar: _react.PropTypes.shape({}).isRequired,
  tracks: _react.PropTypes.arrayOf(_react.PropTypes.shape({}))
};

exports.default = Timeline;
module.exports = exports['default'];