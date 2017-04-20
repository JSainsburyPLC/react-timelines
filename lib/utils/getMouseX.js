"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getMouseX = function getMouseX(e) {
  var target = e.currentTarget;
  var bounds = target.getBoundingClientRect();
  return e.clientX - bounds.left;
};

exports.default = getMouseX;
module.exports = exports["default"];