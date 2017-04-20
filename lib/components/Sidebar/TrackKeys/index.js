'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TrackKey = require('./TrackKey');

var _TrackKey2 = _interopRequireDefault(_TrackKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TrackKeys = function TrackKeys(_ref) {
  var tracks = _ref.tracks,
      toggleOpen = _ref.toggleOpen;
  return _react2.default.createElement(
    'div',
    { className: 'track-keys' },
    tracks.map(function (track) {
      return _react2.default.createElement(_TrackKey2.default, {
        key: track.id,
        track: track,
        toggleOpen: toggleOpen
      });
    })
  );
};

TrackKeys.propTypes = {
  tracks: _react.PropTypes.arrayOf(_react.PropTypes.shape({})),
  toggleOpen: _react.PropTypes.func
};

exports.default = TrackKeys;
module.exports = exports['default'];