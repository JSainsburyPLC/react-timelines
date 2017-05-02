'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PointerMarker = function PointerMarker(_ref) {
  var x = _ref.x,
      text = _ref.text,
      visible = _ref.visible,
      highlighted = _ref.highlighted;
  return _react2.default.createElement(
    _2.default,
    { modifier: 'pointer', x: x, visible: visible, highlighted: highlighted },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'strong',
          null,
          text
        )
      )
    )
  );
};

PointerMarker.propTypes = {
  x: _propTypes2.default.number.isRequired,
  text: _propTypes2.default.string.isRequired,
  visible: _propTypes2.default.bool,
  highlighted: _propTypes2.default.bool
};

exports.default = PointerMarker;
module.exports = exports['default'];