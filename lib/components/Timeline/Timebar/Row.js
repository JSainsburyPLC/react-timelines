'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(_ref) {
  var time = _ref.time,
      title = _ref.title,
      cells = _ref.cells;
  return _react2.default.createElement(
    'div',
    { className: 'timebar__row' },
    cells.map(function (cell) {
      return _react2.default.createElement(_Cell2.default, (0, _extends3.default)({ key: cell.id, time: time }, cell));
    })
  );
};

Row.propTypes = {
  time: _react.PropTypes.shape({}),
  title: _react.PropTypes.string.isRequired,
  cells: _react.PropTypes.arrayOf(_react.PropTypes.shape({})).isRequired
};

exports.default = Row;
module.exports = exports['default'];