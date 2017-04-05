'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Timebar = function Timebar() {
  return _react2.default.createElement(
    'div',
    { className: 'timebar' },
    _react2.default.createElement(_Row2.default, null),
    _react2.default.createElement(_Row2.default, null),
    _react2.default.createElement(_Row2.default, null)
  );
};

exports.default = Timebar;
module.exports = exports['default'];