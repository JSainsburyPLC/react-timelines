'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Timebar = function Timebar(_ref) {
  var time = _ref.time,
      rows = _ref.rows;
  return _react2.default.createElement(
    'div',
    { className: 'timebar' },
    rows.map(function (_ref2) {
      var id = _ref2.id,
          title = _ref2.title,
          cells = _ref2.cells,
          style = _ref2.style;
      return _react2.default.createElement(_Row2.default, {
        key: id,
        time: time,
        title: title,
        cells: cells,
        style: style
      });
    })
  );
};

Timebar.propTypes = {
  time: _propTypes2.default.shape({}).isRequired,
  rows: _propTypes2.default.arrayOf(_propTypes2.default.shape({})).isRequired
};

exports.default = Timebar;
module.exports = exports['default'];