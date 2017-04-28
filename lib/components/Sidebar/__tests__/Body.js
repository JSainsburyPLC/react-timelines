'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Body = require('../Body');

var _Body2 = _interopRequireDefault(_Body);

var _TrackKeys = require('../TrackKeys');

var _TrackKeys2 = _interopRequireDefault(_TrackKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Body />', function () {
  it('renders <TrackKeys />', function () {
    var props = {
      tracks: [{}],
      toggleTrackOpen: jest.fn()
    };
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Body2.default, props));
    expect(wrapper.find(_TrackKeys2.default).exists()).toBe(true);
  });
});