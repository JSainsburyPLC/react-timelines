'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Track = require('./Track');

var _Track2 = _interopRequireDefault(_Track);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function Body(_ref) {
  var time = _ref.time,
      tracks = _ref.tracks;
  return _react2.default.createElement(
    'div',
    { className: 'timeline__body' },
    tracks.map(function (_ref2) {
      var id = _ref2.id,
          elements = _ref2.elements;
      return _react2.default.createElement(_Track2.default, { key: id, time: time, elements: elements });
    })
  );
};

Body.propTypes = {
  time: _react.PropTypes.shape({}).isRequired,
  tracks: _react.PropTypes.arrayOf(_react.PropTypes.shape({}))
};

exports.default = Body;
module.exports = exports['default'];