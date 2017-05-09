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
      time: (0, _time2.default)(props.scale),
      isHeaderSticky: false,
      headerHeight: 0,
      markerOffset: 0,
      sidebarWidth: 0
    };

    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.getHeaderHeight = _this.getHeaderHeight.bind(_this);
    _this.getMarkerOffset = _this.getMarkerOffset.bind(_this);
    _this.getSidebarWidth = _this.getSidebarWidth.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Container, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.stickyHeader) {
        window.addEventListener('scroll', this.handleScroll);
        this.getSidebarWidth();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.scale !== this.props.scale) {
        this.setState({ time: (0, _time2.default)(nextProps.scale) });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.stickyHeader) {
        window.removeEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: 'getSidebarWidth',
    value: function getSidebarWidth() {
      this.setState({
        sidebarWidth: this.sidebar.offsetWidth
      });
    }
  }, {
    key: 'getHeaderHeight',
    value: function getHeaderHeight(header) {
      this.setState(function () {
        return {
          headerHeight: header.offsetHeight
        };
      });
    }
  }, {
    key: 'getMarkerOffset',
    value: function getMarkerOffset(node) {
      var markerOffset = parseInt(getComputedStyle(node, null).getPropertyValue('padding-top'), 10);
      this.setState(function () {
        return { markerOffset: markerOffset };
      });
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      var _this2 = this;

      requestAnimationFrame(function () {
        var _state = _this2.state,
            markerOffset = _state.markerOffset,
            headerHeight = _state.headerHeight;

        var _tracker$getBoundingC = _this2.tracker.getBoundingClientRect(),
            top = _tracker$getBoundingC.top,
            bottom = _tracker$getBoundingC.bottom;

        var isHeaderSticky = top <= -markerOffset && bottom >= headerHeight;
        if (_this2.props.stickyHeader) {
          _this2.setState(function () {
            return { isHeaderSticky: isHeaderSticky };
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          _props$isOpen = _props.isOpen,
          isOpen = _props$isOpen === undefined ? true : _props$isOpen,
          tracks = _props.tracks,
          now = _props.now,
          timebar = _props.timebar,
          toggleOpen = _props.toggleOpen,
          toggleTrackOpen = _props.toggleTrackOpen,
          zoomIn = _props.zoomIn,
          zoomOut = _props.zoomOut,
          scale = _props.scale;
      var _state2 = this.state,
          time = _state2.time,
          isHeaderSticky = _state2.isHeaderSticky,
          headerHeight = _state2.headerHeight,
          sidebarWidth = _state2.sidebarWidth;

      return _react2.default.createElement(
        'div',
        { className: 'react-timelines', ref: function ref(tracker) {
            _this3.tracker = tracker;
          } },
        _react2.default.createElement(_Controls2.default, {
          isOpen: isOpen,
          toggleOpen: toggleOpen,
          zoomIn: zoomIn,
          zoomOut: zoomOut,
          zoom: scale.zoom,
          zoomMin: scale.zoomMin,
          zoomMax: scale.zoomMax
        }),
        _react2.default.createElement(
          'div',
          { className: 'layout ' + (isOpen ? 'is-open' : '') },
          _react2.default.createElement(
            'div',
            { className: 'layout__side', ref: function ref(sidebar) {
                _this3.sidebar = sidebar;
              } },
            _react2.default.createElement(_Sidebar2.default, {
              timebar: timebar,
              tracks: tracks,
              toggleTrackOpen: toggleTrackOpen,
              isHeaderSticky: isHeaderSticky,
              headerHeight: headerHeight,
              width: sidebarWidth
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'layout__main' },
            _react2.default.createElement(_Timeline2.default, {
              now: now,
              time: time,
              timebar: timebar,
              tracks: tracks,
              getMarkerOffset: this.getMarkerOffset,
              getHeaderHeight: this.getHeaderHeight,
              isHeaderSticky: isHeaderSticky,
              headerHeight: headerHeight
            })
          )
        )
      );
    }
  }]);
  return Container;
}(_react.Component);

Container.propTypes = {
  scale: _propTypes2.default.shape({
    start: _propTypes2.default.instanceOf(Date).isRequired,
    end: _propTypes2.default.instanceOf(Date).isRequired,
    zoom: _propTypes2.default.number.isRequired,
    zoomMin: _propTypes2.default.number,
    zoomMax: _propTypes2.default.number
  }).isRequired,
  timebar: _propTypes2.default.shape({}).isRequired,
  tracks: _propTypes2.default.arrayOf(_propTypes2.default.shape({})).isRequired,
  now: _propTypes2.default.instanceOf(Date),
  isOpen: _propTypes2.default.bool,
  toggleOpen: _propTypes2.default.func,
  toggleTrackOpen: _propTypes2.default.func,
  zoomIn: _propTypes2.default.func,
  zoomOut: _propTypes2.default.func,
  stickyHeader: _propTypes2.default.bool
};

exports.default = Container;
module.exports = exports['default'];