"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var lerp = function lerp(start, end, alpha) {
  return start * (1.0 - alpha) + end * alpha;
};

exports.default = lerp;
module.exports = exports["default"];