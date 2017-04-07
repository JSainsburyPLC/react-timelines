"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var create = function create(_ref) {
  var start = _ref.start,
      end = _ref.end,
      factor = _ref.factor;

  var MILLIS_IN_A_DAY = 24 * 60 * 60 * 1000;

  var duration = end - start;
  var days = duration / MILLIS_IN_A_DAY;
  var timelineWidth = days * factor;

  var toX = function toX(from) {
    var value = (from - start) / duration;
    return value * timelineWidth;
  };

  var toStyleLeft = function toStyleLeft(from) {
    return {
      left: toX(from) + "px"
    };
  };

  var toStyleLeftAndWidth = function toStyleLeftAndWidth(from, to) {
    var left = toX(from);
    return {
      left: left + "px",
      width: toX(to) - left + "px"
    };
  };

  return {
    timelineWidth: timelineWidth,
    start: start,
    end: end,
    factor: factor,
    toX: toX,
    toStyleLeft: toStyleLeft,
    toStyleLeftAndWidth: toStyleLeftAndWidth
  };
};

exports.default = create;
module.exports = exports["default"];