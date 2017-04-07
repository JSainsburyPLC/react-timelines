'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./');

var _2 = _interopRequireDefault(_);

var _Element = require('./Element');

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Track = function Track(_ref) {
  var time = _ref.time,
      elements = _ref.elements,
      tracks = _ref.tracks,
      style = _ref.style;
  return _react2.default.createElement(
    'div',
    { className: 'track' },
    _react2.default.createElement(
      'div',
      { className: 'track__elements' },
      elements.map(function (_ref2) {
        var id = _ref2.id,
            title = _ref2.title,
            start = _ref2.start,
            end = _ref2.end;
        return _react2.default.createElement(
          'div',
          {
            key: id,
            className: 'track__element',
            style: time.toStyleLeftAndWidth(start, end)
          },
          _react2.default.createElement(_Element2.default, { title: title, style: style })
        );
      })
    ),
    tracks && tracks.length > 0 && _react2.default.createElement(_2.default, { time: time, tracks: tracks })
  );
};

Track.propTypes = {
  time: _react.PropTypes.shape({}).isRequired,
  elements: _react.PropTypes.arrayOf(_react.PropTypes.shape({})).isRequired,
  tracks: _react.PropTypes.arrayOf(_react.PropTypes.shape({})),
  style: _react.PropTypes.shape({})
};

exports.default = Track;
module.exports = exports['default'];