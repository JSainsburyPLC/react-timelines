"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getRelativeMouseX = function getRelativeMouseX(e) {
  var target = e.currentTarget;
  var bounds = target.getBoundingClientRect();
  return e.clientX - bounds.left;
};

exports.default = getRelativeMouseX;
module.exports = exports["default"];