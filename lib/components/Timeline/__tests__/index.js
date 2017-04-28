'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('../Body');

var _Body2 = _interopRequireDefault(_Body);

var _NowMarker = require('../Marker/NowMarker');

var _NowMarker2 = _interopRequireDefault(_NowMarker);

var _PointerMarker = require('../Marker/PointerMarker');

var _PointerMarker2 = _interopRequireDefault(_PointerMarker);

var _getMouseX = require('../../../utils/getMouseX');

var _getMouseX2 = _interopRequireDefault(_getMouseX);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../../../utils/getMouseX');

var createProps = function createProps() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$now = _ref.now,
      now = _ref$now === undefined ? new Date() : _ref$now,
      _ref$time = _ref.time,
      time = _ref$time === undefined ? {
    fromX: jest.fn(function () {
      return new Date();
    })
  } : _ref$time,
      _ref$timebar = _ref.timebar,
      timebar = _ref$timebar === undefined ? {} : _ref$timebar,
      _ref$tracks = _ref.tracks,
      tracks = _ref$tracks === undefined ? [] : _ref$tracks;

  return {
    now: now, time: time, timebar: timebar, tracks: tracks
  };
};

describe('<Timeline />', function () {
  it('renders <NowMarker />, <PointerMarker />, <Header /> and <Body />', function () {
    var props = createProps();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.find(_NowMarker2.default).exists()).toBe(true);
    expect(wrapper.find(_PointerMarker2.default).exists()).toBe(true);
    expect(wrapper.find(_Header2.default).exists()).toBe(true);
    expect(wrapper.find(_Body2.default).exists()).toBe(true);
  });

  it('does not render <NowMarker /> if "now" is "null"', function () {
    var props = createProps({ now: null });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.find(_NowMarker2.default).exists()).toBe(false);
  });

  it('updates the pointerX state when handleMouseMove is called', function () {
    var event = 50;
    var props = createProps();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.state('pointerX')).toBe(0);

    _getMouseX2.default.mockImplementation(function (e) {
      return e;
    });
    wrapper.find(_Header2.default).prop('onMove')(event);
    expect(wrapper.state('pointerX')).toBe(50);
  });

  it('sets "pointerVisible" and "pointerHighlighted" state to "true" when "handleMouseEnter" is called', function () {
    var props = createProps();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.state('pointerVisible')).toBe(false);
    expect(wrapper.state('pointerHighlighted')).toBe(false);

    wrapper.find(_Header2.default).prop('onEnter')();
    expect(wrapper.state('pointerVisible')).toBe(true);
    expect(wrapper.state('pointerHighlighted')).toBe(true);
  });

  it('sets "pointerHighlighted" state to "false" when "handleMouseLeave" is called', function () {
    var props = createProps();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.state('pointerHighlighted')).toBe(false);

    wrapper.find(_Header2.default).prop('onEnter')();
    expect(wrapper.state('pointerHighlighted')).toBe(true);

    wrapper.find(_Header2.default).prop('onLeave')();
    expect(wrapper.state('pointerHighlighted')).toBe(false);
  });
});