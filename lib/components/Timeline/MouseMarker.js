'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Marker = require('./Marker');

var _Marker2 = _interopRequireDefault(_Marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MouseMarker = function MouseMarker(_ref) {
  var mouseOffset = _ref.mouseOffset;
  return _react2.default.createElement(
    _Marker2.default,
    { modifier: 'mouse', style: { left: mouseOffset.x } },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'strong',
          null,
          mouseOffset.x
        )
      )
    )
  );
};

MouseMarker.propTypes = {
  mouseOffset: _react.PropTypes.shape({}).isRequired
};

exports.default = MouseMarker;
module.exports = exports['default'];