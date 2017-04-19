"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var rows = _ref.timebar.rows;
  return _react2.default.createElement(
    "div",
    { className: "sidebar__header" },
    rows.map(function (_ref2) {
      var id = _ref2.id,
          title = _ref2.title;
      return _react2.default.createElement(
        "div",
        { key: id, className: "timebar-key" },
        title
      );
    })
  );
};

Header.propTypes = {
  timebar: _react.PropTypes.shape({})
};

exports.default = Header;
module.exports = exports["default"];