'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TrackKey = function TrackKey(_ref) {
  var title = _ref.title,
      tracks = _ref.tracks;
  return _react2.default.createElement(
    'div',
    { className: 'track-key' },
    _react2.default.createElement(
      'div',
      { className: 'track-key__entry' },
      title
    ),
    tracks && tracks.length > 0 && _react2.default.createElement(_2.default, { tracks: tracks })
  );
};

TrackKey.propTypes = {
  title: _react.PropTypes.string.isRequired,
  tracks: _react.PropTypes.arrayOf(_react.PropTypes.shape({}))
};

exports.default = TrackKey;
module.exports = exports['default'];