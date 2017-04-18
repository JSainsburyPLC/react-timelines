'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Toggle = require('./Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Controls = function Controls(_ref) {
  var isOpen = _ref.isOpen,
      toggleOpen = _ref.toggleOpen;
  return _react2.default.createElement(
    'div',
    { className: 'controls' },
    _react2.default.createElement(_Toggle2.default, { isOpen: isOpen, toggleOpen: toggleOpen })
  );
};

Controls.propTypes = {
  isOpen: _react.PropTypes.bool.isRequired,
  toggleOpen: _react.PropTypes.func.isRequired
};

exports.default = Controls;
module.exports = exports['default'];