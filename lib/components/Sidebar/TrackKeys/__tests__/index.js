'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _TrackKey = require('../TrackKey');

var _TrackKey2 = _interopRequireDefault(_TrackKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<TrackKeys />', function () {
  it('renders a <TrackKey /> for each track', function () {
    var props = {
      tracks: [{
        id: '1',
        title: 'Track 1'
      }, {
        id: '2',
        title: 'Track 2'
      }],
      toggleOpen: jest.fn()
    };
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.find(_TrackKey2.default)).toHaveLength(2);
  });
});