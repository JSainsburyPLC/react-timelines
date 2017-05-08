"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var throttle = function throttle(cb) {
  return requestAnimationFrame(cb);
};

exports.default = throttle;
module.exports = exports["default"];