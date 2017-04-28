'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createProps = function createProps(_ref) {
  var _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === undefined ? true : _ref$isOpen,
      _ref$toggleOpen = _ref.toggleOpen,
      toggleOpen = _ref$toggleOpen === undefined ? jest.fn() : _ref$toggleOpen,
      _ref$zoomIn = _ref.zoomIn,
      zoomIn = _ref$zoomIn === undefined ? jest.fn() : _ref$zoomIn,
      _ref$zoomOut = _ref.zoomOut,
      zoomOut = _ref$zoomOut === undefined ? jest.fn() : _ref$zoomOut,
      _ref$zoom = _ref.zoom,
      zoom = _ref$zoom === undefined ? 2 : _ref$zoom,
      _ref$zoomMin = _ref.zoomMin,
      zoomMin = _ref$zoomMin === undefined ? 1 : _ref$zoomMin,
      _ref$zoomMax = _ref.zoomMax,
      zoomMax = _ref$zoomMax === undefined ? 10 : _ref$zoomMax;
  return {
    isOpen: isOpen,
    toggleOpen: toggleOpen,
    zoomIn: zoomIn,
    zoomOut: zoomOut,
    zoom: zoom,
    zoomMin: zoomMin,
    zoomMax: zoomMax
  };
};

describe('<Controls />', function () {
  describe('Zoom in button', function () {
    var findButton = function findButton(node) {
      return node.find('button.controls__button--zoom-in');
    };

    it('is disabled when "zoom" is equal to "zoomMax"', function () {
      var props = createProps({ zoom: 5, zoomMax: 5 });
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
      expect(findButton(wrapper).prop('disabled')).toBe(true);
    });

    it('is disabled when "zoom" is greater than "zoomMax"', function () {
      var props = createProps({ zoom: 6, zoomMax: 5 });
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
      expect(findButton(wrapper).prop('disabled')).toBe(true);
    });

    it('is not disabled when "zoom" is less than "zoomMax"', function () {
      var props = createProps({ zoom: 2, zoomMax: 5 });
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
      expect(findButton(wrapper).prop('disabled')).toBe(false);
    });

    it('calls "zoomIn() when clicked"', function () {
      var zoomIn = jest.fn();
      var props = createProps({ zoom: 2, zoomMax: 5, zoomIn: zoomIn });
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
      findButton(wrapper).simulate('click');
      expect(zoomIn).toBeCalled();
    });
  });

  describe('Zoom out button', function () {
    var findButton = function findButton(node) {
      return node.find('button.controls__button--zoom-out');
    };

    it('is disabled when "zoom" is equal to "zoomMin"', function () {
      var props = createProps({ zoom: 2, zoomMin: 2 });
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
      expect(findButton(wrapper).prop('disabled')).toBe(true);
    });

    it('is disabled when "zoom" is less than "zoomMin"', function () {
      var props = createProps({ zoom: 1, zoomMin: 2 });
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
      expect(findButton(wrapper).prop('disabled')).toBe(true);
    });

    it('is not disabled when "zoom" is greater than "zoomMin"', function () {
      var props = createProps({ zoom: 5, zoomMin: 2 });
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
      expect(findButton(wrapper).prop('disabled')).toBe(false);
    });

    it('calls "zoomOut() when clicked"', function () {
      var zoomOut = jest.fn();
      var props = createProps({ zoom: 5, zoomMin: 2, zoomOut: zoomOut });
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
      findButton(wrapper).simulate('click');
      expect(zoomOut).toBeCalled();
    });
  });
});