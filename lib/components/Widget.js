"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Widget = function Widget() {
  return _react2.default.createElement(
    "div",
    { className: "gantt" },
    _react2.default.createElement(
      "div",
      { className: "gantt__sidebar" },
      _react2.default.createElement(
        "div",
        { className: "sidebar" },
        _react2.default.createElement(
          "div",
          { className: "sidebar__header" },
          _react2.default.createElement(
            "div",
            { className: "timebar-key" },
            "Timebar key 1"
          ),
          _react2.default.createElement(
            "div",
            { className: "timebar-key" },
            "Timebar key 2"
          ),
          _react2.default.createElement(
            "div",
            { className: "timebar-key" },
            "Timebar key 3"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "sidebar__body" },
          _react2.default.createElement(
            "div",
            { className: "track-key" },
            "Track key 1"
          ),
          _react2.default.createElement(
            "div",
            { className: "track-key" },
            "Track key 2"
          )
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "gantt__timeline" },
      _react2.default.createElement(
        "div",
        { className: "timeline" },
        _react2.default.createElement(
          "div",
          { className: "timeline__header" },
          _react2.default.createElement(
            "div",
            { className: "timebar" },
            _react2.default.createElement(
              "div",
              { className: "timebar__row" },
              "Timebar row 1"
            ),
            _react2.default.createElement(
              "div",
              { className: "timebar__row" },
              "Timebar row 2"
            ),
            _react2.default.createElement(
              "div",
              { className: "timebar__row" },
              "Timebar row 3"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "timeline__body" },
          _react2.default.createElement(
            "div",
            { className: "track" },
            _react2.default.createElement(
              "div",
              { className: "track__entry", style: { left: '100px' } },
              _react2.default.createElement(
                "div",
                { className: "entry" },
                "Entry 1"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "track__entry", style: { left: '800px' } },
              _react2.default.createElement(
                "div",
                { className: "entry" },
                "Entry 2"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "track" },
            _react2.default.createElement(
              "div",
              { className: "track__entry", style: { left: '100px' } },
              _react2.default.createElement(
                "div",
                { className: "entry" },
                "Entry 3"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "track__entry", style: { left: '400px' } },
              _react2.default.createElement(
                "div",
                { className: "entry" },
                "Entry 4"
              )
            )
          )
        )
      )
    )
  );
};

exports.default = Widget;
module.exports = exports["default"];