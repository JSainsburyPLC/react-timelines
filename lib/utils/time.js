"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var create = function create(_ref) {
  var start = _ref.start,
      end = _ref.end,
      scale = _ref.scale;

  var MILLIS_IN_A_DAY = 24 * 60 * 60 * 1000;

  var duration = end - start;
  var days = duration / MILLIS_IN_A_DAY;
  var timelineWidth = days * scale;

  var toX = function toX(input) {
    var value = (input - start) / duration;
    return value * timelineWidth;
  };

  return {
    timelineWidth: timelineWidth,
    start: start,
    end: end,
    scale: scale,
    toX: toX
  };
};

exports.default = create;
module.exports = exports["default"];