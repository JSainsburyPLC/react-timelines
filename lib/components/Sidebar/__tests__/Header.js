'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Header />', function () {
  it('renders the title for each row', function () {
    var timebar = {
      rows: [{ id: '1', title: 'row-1' }, { id: '1', title: 'row-2' }]
    };
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, { timebar: timebar }));
    expect(wrapper.find('.timebar-key').first().text()).toBe('row-1');
    expect(wrapper.find('.timebar-key').last().text()).toBe('row-2');
  });
});