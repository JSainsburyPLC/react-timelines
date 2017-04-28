'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _Timebar = require('../Timebar');

var _Timebar2 = _interopRequireDefault(_Timebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createProps = function createProps() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$time = _ref.time,
      time = _ref$time === undefined ? {} : _ref$time,
      _ref$timebar = _ref.timebar,
      timebar = _ref$timebar === undefined ? { rows: [] } : _ref$timebar,
      _ref$onMove = _ref.onMove,
      onMove = _ref$onMove === undefined ? jest.fn() : _ref$onMove,
      _ref$onEnter = _ref.onEnter,
      onEnter = _ref$onEnter === undefined ? jest.fn() : _ref$onEnter,
      _ref$onLeave = _ref.onLeave,
      onLeave = _ref$onLeave === undefined ? jest.fn() : _ref$onLeave;

  return {
    time: time, timebar: timebar, onMove: onMove, onEnter: onEnter, onLeave: onLeave
  };
};

describe('<Header />', function () {
  it('renders <Timebar />', function () {
    var props = createProps();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, props));
    expect(wrapper.find(_Timebar2.default).exists()).toBe(true);
  });

  it('calls "onMove" on mouse move event', function () {
    var onMove = jest.fn();
    var props = createProps({ onMove: onMove });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, props));
    wrapper.simulate('mouseMove');
    expect(onMove).toBeCalled();
  });

  it('calls "onEnter" on mouse enter event', function () {
    var onEnter = jest.fn();
    var props = createProps({ onEnter: onEnter });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, props));
    wrapper.simulate('mouseEnter');
    expect(onEnter).toBeCalled();
  });

  it('calls "onLeave" on mouse leave event', function () {
    var onLeave = jest.fn();
    var props = createProps({ onLeave: onLeave });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, props));
    wrapper.simulate('mouseLeave');
    expect(onLeave).toBeCalled();
  });
});