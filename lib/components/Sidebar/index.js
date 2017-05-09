'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('./Body');

var _Body2 = _interopRequireDefault(_Body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = function Sidebar(_ref) {
  var timebar = _ref.timebar,
      tracks = _ref.tracks,
      toggleTrackOpen = _ref.toggleTrackOpen,
      isHeaderSticky = _ref.isHeaderSticky,
      headerHeight = _ref.headerHeight,
      width = _ref.width;
  return _react2.default.createElement(
    'div',
    { className: 'sidebar' },
    _react2.default.createElement(_Header2.default, {
      timebar: timebar,
      isSticky: isHeaderSticky,
      height: headerHeight,
      width: width
    }),
    _react2.default.createElement(_Body2.default, { tracks: tracks, toggleTrackOpen: toggleTrackOpen })
  );
};

Sidebar.propTypes = {
  timebar: _propTypes2.default.shape({}),
  tracks: _propTypes2.default.arrayOf(_propTypes2.default.shape({})),
  toggleTrackOpen: _propTypes2.default.func,
  isHeaderSticky: _propTypes2.default.bool,
  headerHeight: _propTypes2.default.number,
  width: _propTypes2.default.number
};

exports.default = Sidebar;
module.exports = exports['default'];