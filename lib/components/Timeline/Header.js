'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Timebar = require('./Timebar');

var _Timebar2 = _interopRequireDefault(_Timebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var time = _ref.time,
      rows = _ref.timebar.rows;
  return _react2.default.createElement(
    'div',
    { className: 'timeline__header' },
    _react2.default.createElement(_Timebar2.default, { time: time, rows: rows })
  );
};

Header.propTypes = {
  time: _react.PropTypes.shape({}).isRequired,
  timebar: _react.PropTypes.shape({}).isRequired
};

exports.default = Header;
module.exports = exports['default'];