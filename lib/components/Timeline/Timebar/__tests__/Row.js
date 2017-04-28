'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Row = require('../Row');

var _Row2 = _interopRequireDefault(_Row);

var _Cell = require('../Cell');

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Row />', function () {
  it('renders the <Cell /> components', function () {
    var props = {
      time: {},
      cells: [{
        title: 'test',
        start: new Date(),
        end: new Date(),
        id: '1'
      }, {
        title: 'test',
        start: new Date(),
        end: new Date(),
        id: '2'
      }]
    };
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Row2.default, props));
    expect(wrapper.find(_Cell2.default)).toHaveLength(2);
  });
});