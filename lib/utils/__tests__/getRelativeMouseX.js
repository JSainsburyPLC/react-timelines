'use strict';

var _getRelativeMouseX = require('../getRelativeMouseX');

var _getRelativeMouseX2 = _interopRequireDefault(_getRelativeMouseX);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getRelativeMouseX', function () {
  it('gets mouse x position for a given event', function () {
    var event = {
      clientX: 200,
      currentTarget: {
        getBoundingClientRect: function getBoundingClientRect() {
          return { left: 10 };
        }
      }
    };
    expect((0, _getRelativeMouseX2.default)(event)).toBe(190);
  });
});