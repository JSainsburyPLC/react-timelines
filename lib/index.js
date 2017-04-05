'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Sidebar = require('./components/Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Timeline = require('./components/Timeline');

var _Timeline2 = _interopRequireDefault(_Timeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: 'ln-timeline' },
    _react2.default.createElement(
      'div',
      { className: 'layout' },
      _react2.default.createElement(
        'div',
        { className: 'layout__side' },
        _react2.default.createElement(_Sidebar2.default, null)
      ),
      _react2.default.createElement(
        'div',
        { className: 'layout__main' },
        _react2.default.createElement(_Timeline2.default, null)
      )
    )
  );
};

module.exports = exports['default'];