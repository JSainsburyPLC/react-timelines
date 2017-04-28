'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toggle = function Toggle(_ref) {
  var toggleOpen = _ref.toggleOpen,
      isOpen = _ref.isOpen;
  return _react2.default.createElement(
    'button',
    {
      className: 'controls__button controls__button--toggle ' + (isOpen ? 'controls__button--toggle-close' : 'controls__button--toggle-open'),
      onClick: toggleOpen
    },
    isOpen ? 'Close' : 'Open'
  );
};

Toggle.propTypes = {
  toggleOpen: _propTypes2.default.func.isRequired,
  isOpen: _propTypes2.default.bool.isRequired
};

exports.default = Toggle;
module.exports = exports['default'];