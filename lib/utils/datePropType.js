'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var propTypeDate = _react.PropTypes.oneOfType([_react.PropTypes.shape({}), _react.PropTypes.instanceOf(Date)]);

exports.default = propTypeDate;
module.exports = exports['default'];