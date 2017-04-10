'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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
      isOpen = _ref.isOpen,
      tracks = _ref.tracks,
      trackStyle = _ref.style;
  return _react2.default.createElement(
    'div',
    { className: 'track' },
    _react2.default.createElement(
      'div',
      { className: 'track__elements' },
      elements.map(function (element) {
        return _react2.default.createElement(_Element2.default, (0, _extends3.default)({ trackStyle: trackStyle, time: time, style: element.style }, element));
      })
    ),
    isOpen && tracks && tracks.length > 0 && _react2.default.createElement(_2.default, { time: time, tracks: tracks })
  );
};

Track.propTypes = {
  time: _react.PropTypes.shape({}).isRequired,
  isOpen: _react.PropTypes.bool,
  elements: _react.PropTypes.arrayOf(_react.PropTypes.shape({})).isRequired,
  tracks: _react.PropTypes.arrayOf(_react.PropTypes.shape({})),
  style: _react.PropTypes.shape({})
};

exports.default = Track;
module.exports = exports['default'];