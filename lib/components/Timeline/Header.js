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

var _Timebar = require('./Timebar');

var _Timebar2 = _interopRequireDefault(_Timebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_PureComponent) {
  (0, _inherits3.default)(Header, _PureComponent);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.scrollLeft !== nextProps.scrollLeft) {
        this.wrapper.scrollLeft = nextProps.scrollLeft;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          time = _props.time,
          onMove = _props.onMove,
          onEnter = _props.onEnter,
          onLeave = _props.onLeave,
          isSticky = _props.isSticky,
          width = _props.width,
          height = _props.height,
          visualWidth = _props.visualWidth,
          rows = _props.timebar.rows;

      var style = isSticky ? {
        width: visualWidth
      } : {};
      return _react2.default.createElement(
        'div',
        { style: isSticky ? { paddingTop: height } : {} },
        _react2.default.createElement(
          'div',
          { className: 'timeline__header ' + (isSticky ? 'is-sticky' : ''), style: style, ref: function ref(wrapper) {
              _this2.wrapper = wrapper;
            } },
          _react2.default.createElement(
            'div',
            {
              style: { width: width },
              onMouseMove: onMove,
              onMouseEnter: onEnter,
              onMouseLeave: onLeave
            },
            _react2.default.createElement(_Timebar2.default, { time: time, rows: rows })
          )
        )
      );
    }
  }]);
  return Header;
}(_react.PureComponent);

Header.propTypes = {
  time: _propTypes2.default.shape({}).isRequired,
  timebar: _propTypes2.default.shape({}).isRequired,
  onMove: _propTypes2.default.func.isRequired,
  onEnter: _propTypes2.default.func.isRequired,
  onLeave: _propTypes2.default.func.isRequired,
  isSticky: _propTypes2.default.bool,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  visualWidth: _propTypes2.default.number,
  scrollLeft: _propTypes2.default.number
};

exports.default = Header;
module.exports = exports['default'];