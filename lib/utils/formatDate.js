'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var getMonth = exports.getMonth = function getMonth(date) {
  return monthNames[date.getMonth()];
};

var getDayMonth = exports.getDayMonth = function getDayMonth(date) {
  return date.getDate() + ' ' + getMonth(date);
};