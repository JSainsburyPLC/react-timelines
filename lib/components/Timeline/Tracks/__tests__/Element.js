'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Element = require('../Element');

var _Element2 = _interopRequireDefault(_Element);

var _Basic = require('../../../Elements/Basic');

var _Basic2 = _interopRequireDefault(_Basic);

var _time = require('../../../../utils/time');

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Element />', function () {
  var props = {
    id: '1',
    time: (0, _time2.default)({
      start: new Date('2016-01-01'),
      end: new Date('2019-01-01'),
      zoom: 1
    }),
    title: 'test',
    start: new Date('2017-01-01'),
    end: new Date('2018-01-01')
  };

  it('renders with a calculated width and left position based on "start" and "end"', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Element2.default, props));
    expect(wrapper.prop('style')).toEqual({
      left: '366px',
      width: '365px'
    });
  });

  it('renders <BasicElement />', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Element2.default, props));
    expect(wrapper.find(_Basic2.default).exists()).toBe(true);
  });
});