'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Track = require('./Track');

var _Track2 = _interopRequireDefault(_Track);

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
          children = _ref2.tracks;
      return _react2.default.createElement(_Track2.default, {
        key: id,
        time: time,
        elements: elements,
        isOpen: isOpen,
        tracks: children
      });
    })
  );
};

Tracks.propTypes = {
  time: _propTypes2.default.shape({}).isRequired,
  tracks: _propTypes2.default.arrayOf(_propTypes2.default.shape({}))
};

exports.default = Tracks;
module.exports = exports['default'];