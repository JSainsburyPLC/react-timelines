'use strict';

var _time = require('../time');

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('createTime', function () {
  describe('timelineWidth', function () {
    it('calculates timelineWidth from start, end and scale', function () {
      var _createTime = (0, _time2.default)({
        start: new Date('2017-01-01T00:00:00.000Z'),
        end: new Date('2018-01-01T00:00:00.000Z'),
        scale: 10 // 10px === 1 day
      }),
          timelineWidth = _createTime.timelineWidth;

      expect(timelineWidth).toBe(3650);
    });

    it('scale relates to pixel width of one day', function () {
      var newYear = new Date('2017-01-01T00:00:00.000Z');
      var newYearMidday = new Date('2017-01-01T12:00:00.000Z');

      var _createTime2 = (0, _time2.default)({
        start: newYear,
        end: newYearMidday,
        scale: 100
      }),
          timelineWidth = _createTime2.timelineWidth;

      expect(timelineWidth).toBe(50);
    });
  });

  describe('toX()', function () {
    it('calculates correct x pixel position for given date', function () {
      var start = new Date('2017-01-01T00:00:00.000Z');
      var end = new Date('2018-01-01T00:00:00.000Z');

      var _createTime3 = (0, _time2.default)({ start: start, end: end, scale: 2 }),
          toX = _createTime3.toX;

      var nearMiddle = new Date('2017-07-01');
      var notClamped = new Date('2020-01-01');
      expect(toX(end)).toBe(730);
      expect(toX(start)).toBe(0);
      expect(toX(nearMiddle)).toBe(362);
      expect(toX(notClamped)).toBe(2190);
    });
  });

  describe('toStyleLeft()', function () {
    it('returns style object with correct "left" property', function () {
      var start = new Date('2017-01-01T00:00:00.000Z');
      var firstOfJune = new Date('2017-06-01T12:34:56.000Z');
      var end = new Date('2018-01-01T00:00:00.000Z');

      var _createTime4 = (0, _time2.default)({ start: start, end: end, scale: 2 }),
          toStyleLeft = _createTime4.toStyleLeft;

      expect(toStyleLeft(start)).toEqual({ left: '0px' });
      expect(toStyleLeft(firstOfJune)).toEqual({ left: '303.0485185185185px' });
      expect(toStyleLeft(end)).toEqual({ left: '730px' });
    });
  });

  describe('toStyleLeftAndWidth()', function () {
    it('returns style object with correct "left" and "width" property', function () {
      var start = new Date('2017-01-01T00:00:00.000Z');
      var firstOfJune = new Date('2017-06-01T12:34:56.000Z');
      var end = new Date('2018-01-01T00:00:00.000Z');

      var _createTime5 = (0, _time2.default)({ start: start, end: end, scale: 2 }),
          toStyleLeftAndWidth = _createTime5.toStyleLeftAndWidth;

      expect(toStyleLeftAndWidth(start, end)).toEqual({ left: '0px', width: '730px' });
      expect(toStyleLeftAndWidth(firstOfJune, end)).toEqual({ left: '303.0485185185185px', width: '426.9514814814815px' });
    });
  });
});