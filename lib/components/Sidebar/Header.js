'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var isSticky = _ref.isSticky,
      height = _ref.height,
      width = _ref.width,
      rows = _ref.timebar.rows;
  return _react2.default.createElement(
    'div',
    { style: isSticky ? { paddingTop: height } : {} },
    _react2.default.createElement(
      'div',
      { className: 'sidebar__header ' + (isSticky ? 'is-sticky' : ''), style: { width: width } },
      rows.map(function (_ref2) {
        var id = _ref2.id,
            title = _ref2.title;
        return _react2.default.createElement(
          'div',
          { key: id, className: 'timebar-key' },
          title
        );
      })
    )
  );
};

Header.propTypes = {
  isSticky: _propTypes2.default.bool,
  height: _propTypes2.default.number,
  width: _propTypes2.default.number,
  timebar: _propTypes2.default.shape({})
};

exports.default = Header;
module.exports = exports['default'];