'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Track = require('../Track');

var _Track2 = _interopRequireDefault(_Track);

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _Element = require('../Element');

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createProps = function createProps(_ref) {
  var _ref$time = _ref.time,
      time = _ref$time === undefined ? {} : _ref$time,
      _ref$elements = _ref.elements,
      elements = _ref$elements === undefined ? [] : _ref$elements,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === undefined ? false : _ref$isOpen,
      _ref$tracks = _ref.tracks,
      tracks = _ref$tracks === undefined ? [] : _ref$tracks;
  return {
    time: time, elements: elements, isOpen: isOpen, tracks: tracks
  };
};

describe('<Track />', function () {
  it('filters out <Element /> components where "start" is after "end"', function () {
    var props = createProps({
      elements: [{
        id: '1',
        start: new Date('2017-01-01'),
        end: new Date('2018-01-01')
      }, {
        id: '2',
        start: new Date('2018-01-01'),
        end: new Date('2017-01-01')
      }]
    });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Track2.default, props));
    expect(wrapper.find(_Element2.default)).toHaveLength(1);
  });

  it('renders <Tracks /> if is open and tracks exist', function () {
    var props = createProps({
      isOpen: true,
      tracks: [{}]
    });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Track2.default, props));
    expect(wrapper.find(_2.default)).toHaveLength(1);
  });

  it('does not render <Tracks /> is is not open', function () {
    var props = createProps({
      isOpen: false,
      tracks: [{}]
    });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Track2.default, props));
    expect(wrapper.find(_2.default)).toHaveLength(0);
  });

  it('does not render <Tracks /> if there are no tracks', function () {
    var props = createProps({
      isOpen: true,
      tracks: []
    });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Track2.default, props));
    expect(wrapper.find(_2.default)).toHaveLength(0);
  });
});