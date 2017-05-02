'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Pointer = require('../Pointer');

var _Pointer2 = _interopRequireDefault(_Pointer);

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<PointerMarker />', function () {
  var props = {
    x: 0,
    text: 'test',
    visible: false,
    highlighted: false
  };

  it('renders <Marker />', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Pointer2.default, props));
    expect(wrapper.find(_2.default).exists()).toBe(true);
  });

  it('renders "text"', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Pointer2.default, props));
    expect(wrapper.find('strong').text()).toBe('test');
  });
});