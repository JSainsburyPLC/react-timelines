'use strict';

var _getMonth = require('../getMonth');

var _getMonth2 = _interopRequireDefault(_getMonth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getMonth', function () {
  it('returns the current month name for a given date', function () {
    expect((0, _getMonth2.default)(new Date('2017-01-01'))).toEqual('Jan');
    expect((0, _getMonth2.default)(new Date('2017-02-01'))).toEqual('Feb');
    expect((0, _getMonth2.default)(new Date('2017-11-01'))).toEqual('Nov');
  });
});