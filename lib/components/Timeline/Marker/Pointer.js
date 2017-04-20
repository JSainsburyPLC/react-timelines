'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MouseMarker = function MouseMarker(_ref) {
  var x = _ref.x;
  return _react2.default.createElement(
    _2.default,
    { modifier: 'pointer', x: x },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'strong',
          null,
          x
        )
      )
    )
  );
};

MouseMarker.propTypes = {
  x: _react.PropTypes.number.isRequired
};

exports.default = MouseMarker;
module.exports = exports['default'];