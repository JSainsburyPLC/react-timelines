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

var _ = require('./');

var _2 = _interopRequireDefault(_);

var _datePropType = require('../../../utils/datePropType');

var _datePropType2 = _interopRequireDefault(_datePropType);

var _formatDate = require('../../../utils/formatDate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodayMarker = function (_PureComponent) {
  (0, _inherits3.default)(TodayMarker, _PureComponent);

  function TodayMarker() {
    (0, _classCallCheck3.default)(this, TodayMarker);
    return (0, _possibleConstructorReturn3.default)(this, (TodayMarker.__proto__ || (0, _getPrototypeOf2.default)(TodayMarker)).apply(this, arguments));
  }

  (0, _createClass3.default)(TodayMarker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          now = _props.now,
          time = _props.time;

      return _react2.default.createElement(
        _2.default,
        { modifier: 'now', x: time.toX(now) },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            null,
            'Today'
          ),
          _react2.default.createElement(
            'strong',
            null,
            (0, _formatDate.getDayMonth)(now)
          )
        )
      );
    }
  }]);
  return TodayMarker;
}(_react.PureComponent);

TodayMarker.propTypes = {
  time: _react.PropTypes.shape({}).isRequired,
  now: _datePropType2.default
};

exports.default = TodayMarker;
module.exports = exports['default'];