'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tracks = require('./Tracks');

var _Tracks2 = _interopRequireDefault(_Tracks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function (_PureComponent) {
  (0, _inherits3.default)(Body, _PureComponent);

  function Body() {
    (0, _classCallCheck3.default)(this, Body);
    return (0, _possibleConstructorReturn3.default)(this, (Body.__proto__ || (0, _getPrototypeOf2.default)(Body)).apply(this, arguments));
  }

  (0, _createClass3.default)(Body, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          time = _props.time,
          tracks = _props.tracks;

      return _react2.default.createElement(
        'div',
        { className: 'timeline__body' },
        _react2.default.createElement(_Tracks2.default, { time: time, tracks: tracks })
      );
    }
  }]);
  return Body;
}(_react.PureComponent);

Body.propTypes = {
  time: _propTypes2.default.shape({}).isRequired,
  tracks: _propTypes2.default.arrayOf(_propTypes2.default.shape({}))
};

exports.default = Body;
module.exports = exports['default'];