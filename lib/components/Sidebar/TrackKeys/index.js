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
  var tracks = _ref.tracks;
  return _react2.default.createElement(
    'div',
    { className: 'track-keys' },
    tracks.map(function (_ref2) {
      var id = _ref2.id,
          title = _ref2.title,
          isOpen = _ref2.isOpen,
          toggleOpen = _ref2.toggleOpen,
          children = _ref2.tracks;
      return _react2.default.createElement(_TrackKey2.default, {
        key: id,
        title: title,
        isOpen: isOpen,
        toggleOpen: toggleOpen,
        tracks: children
      });
    })
  );
};

TrackKeys.propTypes = {
  tracks: _react.PropTypes.arrayOf(_react.PropTypes.shape({}))
};

exports.default = TrackKeys;
module.exports = exports['default'];