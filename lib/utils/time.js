'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toX = exports.toTimelineWidth = undefined;

var _frac = require('./frac');

var _frac2 = _interopRequireDefault(_frac);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLIS_IN_A_DAY = 24 * 60 * 60 * 1000;

var toTimelineWidth = exports.toTimelineWidth = function toTimelineWidth(time) {
  var start = time.start,
      end = time.end,
      scale = time.scale;

  var days = (end - start) / MILLIS_IN_A_DAY;
  var width = days * scale;
  return width;
};

var toX = exports.toX = function toX(time, input) {
  var start = time.start,
      end = time.end,
      scale = time.scale;

  var width = toTimelineWidth({ start: start, end: end, scale: scale });
  var value = (0, _frac2.default)(start, end, input);
  var x = value * width;
  return x;
};