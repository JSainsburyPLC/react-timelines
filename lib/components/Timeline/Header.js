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
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getHeight(this.timebar);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          scrollLeft = _props.scrollLeft,
          isSticky = _props.isSticky;

      if (scrollLeft !== prevProps.scrollLeft || isSticky !== prevProps.isSticky) {
        this.scroll.scrollLeft = scrollLeft;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          time = _props2.time,
          onMove = _props2.onMove,
          onEnter = _props2.onEnter,
          onLeave = _props2.onLeave,
          isSticky = _props2.isSticky,
          width = _props2.width,
          height = _props2.height,
          visualWidth = _props2.visualWidth,
          rows = _props2.timebar.rows;

      return _react2.default.createElement(
        'div',
        { style: isSticky ? { paddingTop: height } : {},
          onMouseMove: onMove,
          onMouseEnter: onEnter,
          onMouseLeave: onLeave
        },
        _react2.default.createElement(
          'div',
          {
            className: 'timeline__header ' + (isSticky ? 'is-sticky' : ''),
            style: isSticky ? { width: visualWidth, height: height } : { height: height }
          },
          _react2.default.createElement(
            'div',
            { className: 'timeline__header-scroll', ref: function ref(scroll) {
                _this2.scroll = scroll;
              } },
            _react2.default.createElement(
              'div',
              {
                ref: function ref(timebar) {
                  _this2.timebar = timebar;
                },
                style: { width: width }
              },
              _react2.default.createElement(_Timebar2.default, { time: time, rows: rows })
            )
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
  scrollLeft: _propTypes2.default.number,
  getHeight: _propTypes2.default.func
};

exports.default = Header;
module.exports = exports['default'];