'use strict';

var _getMouseX = require('../getMouseX');

var _getMouseX2 = _interopRequireDefault(_getMouseX);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getMouseX', function () {
  it('gets mouse x position for a given event', function () {
    var event = {
      clientX: 200,
      currentTarget: {
        getBoundingClientRect: function getBoundingClientRect() {
          return { left: 10 };
        }
      }
    };
    expect((0, _getMouseX2.default)(event)).toBe(190);
  });
});