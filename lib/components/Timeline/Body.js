'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Track = require('./Track');

var _Track2 = _interopRequireDefault(_Track);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function Body() {
  return _react2.default.createElement(
    'div',
    { className: 'timeline__body' },
    _react2.default.createElement(_Track2.default, { elements: [{ left: 100 }, { left: 200 }] }),
    _react2.default.createElement(_Track2.default, { elements: [{ left: 300 }, { left: 400 }] })
  );
};

exports.default = Body;
module.exports = exports['default'];