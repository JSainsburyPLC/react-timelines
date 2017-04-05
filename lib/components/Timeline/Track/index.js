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
  var elements = _ref.elements;
  return _react2.default.createElement(
    'div',
    { className: 'track' },
    elements.map(function (element) {
      return _react2.default.createElement(
        'div',
        { className: 'track__element', style: { left: element.left + 'px' } },
        _react2.default.createElement(_Element2.default, null)
      );
    })
  );
};

Track.propTypes = {
  elements: _react.PropTypes.arrayOf(_react.PropTypes.shape({})).isRequired
};

exports.default = Track;
module.exports = exports['default'];