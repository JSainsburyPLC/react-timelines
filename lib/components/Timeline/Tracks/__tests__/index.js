'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _Track = require('../Track');

var _Track2 = _interopRequireDefault(_Track);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Tracks />', function () {
  it('renders <Track /> components', function () {
    var props = {
      time: {},
      tracks: [{ id: '1', elements: [] }, { id: '2', elements: [] }]
    };
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.find(_Track2.default)).toHaveLength(2);
  });
});