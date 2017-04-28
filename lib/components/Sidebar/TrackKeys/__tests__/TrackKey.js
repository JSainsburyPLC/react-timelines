'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _TrackKey = require('../TrackKey');

var _TrackKey2 = _interopRequireDefault(_TrackKey);

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<TrackKey />', function () {
  describe('toggle button', function () {
    var getToggleButton = function getToggleButton(node) {
      return node.find('.track-key__toggle');
    };

    it('renders when "track.isOpen" is defined', function () {
      var props = {
        track: { title: 'test', isOpen: true },
        toggleOpen: jest.fn()
      };
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TrackKey2.default, props));
      expect(getToggleButton(wrapper).exists()).toBe(true);
    });

    it('does not render when "track.isOpen" is undefined', function () {
      var props = {
        track: { title: 'test', isOpen: undefined },
        toggleOpen: jest.fn()
      };
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TrackKey2.default, props));
      expect(getToggleButton(wrapper).exists()).toBe(false);
    });

    it('renders with the text "Close" when "track.isOpen" is "true"', function () {
      var props = {
        track: { title: 'test', isOpen: true },
        toggleOpen: jest.fn()
      };
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TrackKey2.default, props));
      expect(getToggleButton(wrapper).text()).toBe('Close');
    });

    it('renders with the text "Open" when "track.isOpen" is "false"', function () {
      var props = {
        track: { title: 'test', isOpen: false },
        toggleOpen: jest.fn()
      };
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TrackKey2.default, props));
      expect(getToggleButton(wrapper).text()).toBe('Open');
    });

    it('calls "toggleOpen()" when clicked passing "track" as a single argument', function () {
      var track = {
        title: 'test',
        isOpen: false
      };
      var toggleOpen = jest.fn();
      var props = {
        track: track,
        toggleOpen: toggleOpen
      };
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TrackKey2.default, props));
      getToggleButton(wrapper).simulate('click');
      expect(toggleOpen).toBeCalledWith(track);
    });
  });

  describe('<TrackKeys />', function () {
    it('renders when "isOpen" is truthy and "tracks" is not empty', function () {
      var props = {
        track: { title: 'test', tracks: [{}], isOpen: true },
        toggleOpen: jest.fn()
      };
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TrackKey2.default, props));
      expect(wrapper.find(_2.default).exists()).toBe(true);
    });

    it('does not render when "isOpen" is falsy', function () {
      var props = {
        track: { title: 'test', tracks: [{}], isOpen: false },
        toggleOpen: jest.fn()
      };
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TrackKey2.default, props));
      expect(wrapper.find(_2.default).exists()).toBe(false);
    });

    it('does not render when "tracks" is falsy', function () {
      var props = {
        track: { title: 'test', tracks: null, isOpen: true },
        toggleOpen: jest.fn()
      };
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TrackKey2.default, props));
      expect(wrapper.find(_2.default).exists()).toBe(false);
    });

    it('does not render when "tracks" is an empty array', function () {
      var props = {
        track: { title: 'test', tracks: [], isOpen: true },
        toggleOpen: jest.fn()
      };
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TrackKey2.default, props));
      expect(wrapper.find(_2.default).exists()).toBe(false);
    });
  });
});