'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _Row = require('../Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Timebar />', function () {
  it('renders <Row /> components', function () {
    var props = {
      time: {},
      rows: [{ id: '1', cells: [] }, { id: '1', cells: [] }]
    };
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.find(_Row2.default)).toHaveLength(2);
  });
});