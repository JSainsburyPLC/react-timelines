'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Toggle = require('../Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Toggle />', function () {
  it('displays "Close" when open', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Toggle2.default, { toggleOpen: jest.fn(), isOpen: true }));
    expect(wrapper.text()).toBe('Close');
  });

  it('displays "Open" when closed', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Toggle2.default, { toggleOpen: jest.fn(), isOpen: false }));
    expect(wrapper.text()).toBe('Open');
  });

  it('calls "toggleOpen()" when clicked', function () {
    var toggleOpen = jest.fn();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Toggle2.default, { toggleOpen: toggleOpen, isOpen: true }));
    wrapper.simulate('click');
    expect(toggleOpen).toBeCalled();
  });
});