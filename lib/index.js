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

var _Controls = require('./components/Controls');

var _Controls2 = _interopRequireDefault(_Controls);

var _Sidebar = require('./components/Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Timeline = require('./components/Timeline');

var _Timeline2 = _interopRequireDefault(_Timeline);

var _time = require('./utils/time');

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function (_Component) {
  (0, _inherits3.default)(Container, _Component);

  function Container(props) {
    (0, _classCallCheck3.default)(this, Container);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Container.__proto__ || (0, _getPrototypeOf2.default)(Container)).call(this, props));

    _this.state = {
      time: (0, _time2.default)(props.scale)
    };
    return _this;
  }

  (0, _createClass3.default)(Container, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.scale !== this.props.scale) {
        this.setState({ time: (0, _time2.default)(nextProps.scale) });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          tracks = _props.tracks,
          now = _props.now,
          timebar = _props.timebar,
          toggleOpen = _props.toggleOpen,
          toggleTrackOpen = _props.toggleTrackOpen,
          zoomIn = _props.zoomIn,
          zoomOut = _props.zoomOut,
          scale = _props.scale;
      var time = this.state.time;

      return _react2.default.createElement(
        'div',
        { className: 'react-timeline' },
        _react2.default.createElement(_Controls2.default, {
          isOpen: isOpen,
          toggleOpen: toggleOpen,
          zoomIn: zoomIn,
          zoomOut: zoomOut,
          zoom: scale.zoom
        }),
        _react2.default.createElement(
          'div',
          { className: 'layout ' + (isOpen ? 'is-open' : '') },
          _react2.default.createElement(
            'div',
            { className: 'layout__side' },
            _react2.default.createElement(_Sidebar2.default, {
              timebar: timebar,
              tracks: tracks,
              toggleTrackOpen: toggleTrackOpen
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'layout__main' },
            _react2.default.createElement(_Timeline2.default, {
              now: now,
              time: time,
              timebar: timebar,
              tracks: tracks
            })
          )
        )
      );
    }
  }]);
  return Container;
}(_react.Component);

Container.propTypes = {
  now: _react.PropTypes.instanceOf(Date),
  scale: _react.PropTypes.shape({}).isRequired,
  isOpen: _react.PropTypes.bool.isRequired,
  timebar: _react.PropTypes.shape({}).isRequired,
  tracks: _react.PropTypes.arrayOf(_react.PropTypes.shape({})).isRequired,
  toggleOpen: _react.PropTypes.func.isRequired,
  toggleTrackOpen: _react.PropTypes.func,
  zoomIn: _react.PropTypes.func.isRequired,
  zoomOut: _react.PropTypes.func.isRequired
};

exports.default = Container;
module.exports = exports['default'];