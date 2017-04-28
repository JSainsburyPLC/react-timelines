'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createProps = function createProps(_ref) {
  var _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$modifier = _ref.modifier,
      modifier = _ref$modifier === undefined ? '' : _ref$modifier,
      _ref$children = _ref.children,
      children = _ref$children === undefined ? _react2.default.createElement(
    'div',
    null,
    'test'
  ) : _ref$children,
      _ref$visible = _ref.visible,
      visible = _ref$visible === undefined ? false : _ref$visible,
      _ref$highlighted = _ref.highlighted,
      highlighted = _ref$highlighted === undefined ? false : _ref$highlighted;
  return {
    x: x, modifier: modifier, children: children, visible: visible, highlighted: highlighted
  };
};

describe('<Marker />', function () {
  it('renders the className modifier', function () {
    var modifier = 'test-modifier';
    var props = createProps({ modifier: modifier });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.prop('className')).toMatch(modifier);
  });

  it('is visible if "visible" is truthy', function () {
    var visible = true;
    var props = createProps({ visible: visible });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.prop('className')).toMatch('is-visible');
  });

  it('is invisible if "visible" is falsy', function () {
    var visible = false;
    var props = createProps({ visible: visible });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.prop('className')).not.toMatch('is-visible');
  });

  it('is highlighted if "highlighted" is truthy', function () {
    var highlighted = true;
    var props = createProps({ highlighted: highlighted });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.prop('className')).toMatch('is-highlighted');
  });

  it('is not highlighted if "highlighted" is falsy', function () {
    var highlighted = false;
    var props = createProps({ highlighted: highlighted });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.prop('className')).not.toMatch('is-highlighted');
  });

  it('follows the horizontal mouse position', function () {
    var x = 100;
    var props = createProps({ x: x });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.prop('style')).toEqual({ left: '100px' });
  });
});