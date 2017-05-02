'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _Controls = require('../components/Controls');

var _Controls2 = _interopRequireDefault(_Controls);

var _Sidebar = require('../components/Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Timeline = require('../components/Timeline');

var _Timeline2 = _interopRequireDefault(_Timeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createProps = function createProps() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$now = _ref.now,
      now = _ref$now === undefined ? new Date() : _ref$now,
      _ref$scale = _ref.scale,
      scale = _ref$scale === undefined ? {
    zoom: 1
  } : _ref$scale,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === undefined ? false : _ref$isOpen,
      _ref$timebar = _ref.timebar,
      timebar = _ref$timebar === undefined ? {} : _ref$timebar,
      _ref$tracks = _ref.tracks,
      tracks = _ref$tracks === undefined ? [] : _ref$tracks,
      _ref$toggleOpen = _ref.toggleOpen,
      toggleOpen = _ref$toggleOpen === undefined ? jest.fn() : _ref$toggleOpen,
      _ref$zoomIn = _ref.zoomIn,
      zoomIn = _ref$zoomIn === undefined ? jest.fn() : _ref$zoomIn,
      _ref$zoomOut = _ref.zoomOut,
      zoomOut = _ref$zoomOut === undefined ? jest.fn() : _ref$zoomOut;

  return {
    now: now, scale: scale, isOpen: isOpen, timebar: timebar, tracks: tracks, toggleOpen: toggleOpen, zoomIn: zoomIn, zoomOut: zoomOut
  };
};

describe('<ReactTimeline />', function () {
  it('renders <Controls />, <Sidebar /> and <Timeline />', function () {
    var props = createProps();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.find(_Controls2.default).exists()).toBe(true);
    expect(wrapper.find(_Sidebar2.default).exists()).toBe(true);
    expect(wrapper.find(_Timeline2.default).exists()).toBe(true);
  });

  it('renders <Sidebar /> in an open state when is open', function () {
    var props = createProps({ isOpen: true });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.find('.layout').prop('className')).toMatch('is-open');
  });

  it('renders <Sidebar /> in a close state when is closed', function () {
    var props = createProps({ isOpen: false });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.find('.layout').prop('className')).not.toMatch('is-open');
  });

  it('re-renders when the zoom updates', function () {
    var props = createProps({ scale: { zoom: 1 } });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.state('time').zoom).toBe(1);

    var nextProps = { scale: { zoom: 2 } };

    wrapper.setProps(nextProps);
    expect(wrapper.state('time').zoom).toBe(2);

    wrapper.setProps(nextProps);
    expect(wrapper.state('time').zoom).toBe(2);
  });
});