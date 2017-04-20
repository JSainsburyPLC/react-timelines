'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classModifier = {
  today: 'marker--today',
  mouse: 'marker--mouse'
};

var Marker = function Marker(_ref) {
  var style = _ref.style,
      modifier = _ref.modifier,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    {
      className: 'marker ' + classModifier[modifier],
      style: style
    },
    _react2.default.createElement(
      'div',
      { className: 'marker__label' },
      _react2.default.createElement(
        'div',
        { className: 'marker__content' },
        children
      )
    )
  );
};

Marker.propTypes = {
  style: _react.PropTypes.shape({}).isRequired,
  modifier: _react.PropTypes.string.isRequired,
  children: _react.PropTypes.node
};

exports.default = Marker;
module.exports = exports['default'];