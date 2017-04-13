'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toggle = function Toggle(_ref) {
  var toggleOpen = _ref.toggleOpen,
      isOpen = _ref.isOpen;
  return _react2.default.createElement(
    'button',
    { className: 'layout__toggle-button', onClick: toggleOpen },
    isOpen ? '-' : '+'
  );
};

Toggle.propTypes = {
  toggleOpen: _react.PropTypes.func.isRequired,
  isOpen: _react.PropTypes.bool.isRequired
};

exports.default = Toggle;
module.exports = exports['default'];