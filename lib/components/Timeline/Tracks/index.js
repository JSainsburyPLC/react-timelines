'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Track = require('./Track');

var _Track2 = _interopRequireDefault(_Track);

var _datePropType = require('../../../utils/datePropType');

var _datePropType2 = _interopRequireDefault(_datePropType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tracks = function Tracks(_ref) {
  var time = _ref.time,
      tracks = _ref.tracks;
  return _react2.default.createElement(
    'div',
    { className: 'tracks' },
    tracks.map(function (_ref2) {
      var id = _ref2.id,
          elements = _ref2.elements,
          isOpen = _ref2.isOpen,
          children = _ref2.tracks,
          style = _ref2.style;
      return _react2.default.createElement(_Track2.default, {
        key: id,
        time: time,
        elements: elements,
        isOpen: isOpen,
        tracks: children,
        style: style
      });
    })
  );
};

Tracks.propTypes = {
  time: _react.PropTypes.shape({}).isRequired,
  tracks: _react.PropTypes.arrayOf(_react.PropTypes.shape({}))
};

exports.default = Tracks;
module.exports = exports['default'];