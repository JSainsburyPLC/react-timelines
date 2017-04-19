'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var getMonth = function getMonth(date) {
  return monthNames[date.getMonth()];
};

exports.default = getMonth;
module.exports = exports['default'];