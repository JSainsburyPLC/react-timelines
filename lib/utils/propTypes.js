'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypeDate = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypeDate = exports.propTypeDate = _react.PropTypes.oneOfType([_react.PropTypes.shape({}), _react.PropTypes.instanceOf(Date)]);