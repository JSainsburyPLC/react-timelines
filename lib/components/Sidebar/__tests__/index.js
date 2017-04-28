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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Sidebar />', function () {
  it('renders <Header /> and <Body />', function () {
    var props = {
      timebar: {},
      tracks: [{}],
      toggleTrackOpen: jest.fn()
    };
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.find(_Header2.default).exists()).toBe(true);
    expect(wrapper.find(_Body2.default).exists()).toBe(true);
  });
});