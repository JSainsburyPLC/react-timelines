'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Element = require('./Element');

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Track = function Track(_ref) {
  var time = _ref.time,
      elements = _ref.elements;
  return _react2.default.createElement(
    'div',
    { className: 'track' },
    elements.map(function (_ref2) {
      var id = _ref2.id,
          start = _ref2.start,
          end = _ref2.end;
      return _react2.default.createElement(
        'div',
        {
          key: id,
          className: 'track__element',
          style: time.toStyleLeftAndWidth(start, end)
        },
        _react2.default.createElement(_Element2.default, null)
      );
    })
  );
};

Track.propTypes = {
  time: _react.PropTypes.shape({}).isRequired,
  elements: _react.PropTypes.arrayOf(_react.PropTypes.shape({})).isRequired
};

exports.default = Track;
module.exports = exports['default'];