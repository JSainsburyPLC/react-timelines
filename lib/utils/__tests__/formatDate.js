'use strict';

var _formatDate = require('../formatDate');

describe('formatDate', function () {
  describe('getMonth', function () {
    it('returns the current month name for a given date', function () {
      expect((0, _formatDate.getMonth)(new Date('2017-01-01'))).toEqual('Jan');
      expect((0, _formatDate.getMonth)(new Date('2017-02-01'))).toEqual('Feb');
      expect((0, _formatDate.getMonth)(new Date('2017-11-01'))).toEqual('Nov');
    });
  });

  describe('getDayMonth', function () {
    it('returns the current day and month', function () {
      expect((0, _formatDate.getDayMonth)(new Date('2017-02-01'))).toEqual('1 Feb');
      expect((0, _formatDate.getDayMonth)(new Date('2017-05-20'))).toEqual('20 May');
      expect((0, _formatDate.getDayMonth)(new Date('2017-12-20'))).toEqual('20 Dec');
    });
  });
});