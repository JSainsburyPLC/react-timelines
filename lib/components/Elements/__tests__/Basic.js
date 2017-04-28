'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Basic = require('../Basic');

var _Basic2 = _interopRequireDefault(_Basic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createProps = function createProps(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === undefined ? '' : _ref$title,
      _ref$start = _ref.start,
      start = _ref$start === undefined ? new Date('2017-01-01') : _ref$start,
      _ref$end = _ref.end,
      end = _ref$end === undefined ? new Date('2017-02-01') : _ref$end,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      _ref$tooltip = _ref.tooltip,
      tooltip = _ref$tooltip === undefined ? '' : _ref$tooltip;
  return {
    title: title, start: start, end: end, style: style, tooltip: tooltip
  };
};

describe('<Basic />', function () {
  describe('Tooltip', function () {
    var getTooltip = function getTooltip(node) {
      return node.find('.element__tooltip');
    };

    it('renders the tooltip value if it exists', function () {
      var tooltip = 'Test tooltip';
      var props = createProps({ tooltip: tooltip });
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Basic2.default, props));
      expect(getTooltip(wrapper).text()).toBe(tooltip);
    });

    it('renders the title, formatted start and end date if the tooltip prop does not exist', function () {
      var tooltip = '';
      var title = 'TEST';
      var start = new Date('2017-03-20');
      var end = new Date('2017-04-15');
      var props = createProps({ tooltip: tooltip, title: title, start: start, end: end });
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Basic2.default, props));
      expect(getTooltip(wrapper).text()).toMatch('TEST');
      expect(getTooltip(wrapper).text()).toMatch('Start 20 Mar');
      expect(getTooltip(wrapper).text()).toMatch('End 15 Apr');
    });
  });
});