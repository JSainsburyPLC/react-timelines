'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('./Body');

var _Body2 = _interopRequireDefault(_Body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = function Sidebar() {
  return _react2.default.createElement(
    'div',
    { className: 'sidebar' },
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(_Body2.default, null)
  );
};

exports.default = Sidebar;
module.exports = exports['default'];