'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TrackKeys = require('./TrackKeys');

var _TrackKeys2 = _interopRequireDefault(_TrackKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function Body(_ref) {
  var tracks = _ref.tracks,
      toggleTrackOpen = _ref.toggleTrackOpen;
  return _react2.default.createElement(
    'div',
    { className: 'sidebar__body' },
    _react2.default.createElement(_TrackKeys2.default, { tracks: tracks, toggleOpen: toggleTrackOpen })
  );
};

Body.propTypes = {
  tracks: _react.PropTypes.arrayOf(_react.PropTypes.shape({})),
  toggleTrackOpen: _react.PropTypes.func
};

exports.default = Body;
module.exports = exports['default'];