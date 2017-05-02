'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Elements = require('../../Elements');

var _Elements2 = _interopRequireDefault(_Elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TrackElement = function TrackElement(props) {
  var _props$type = props.type,
      type = _props$type === undefined ? 'Basic' : _props$type,
      id = props.id,
      start = props.start,
      end = props.end,
      time = props.time;

  var Element = _Elements2.default[type];
  return _react2.default.createElement(
    'div',
    {
      key: id,
      className: 'track__element',
      style: time.toStyleLeftAndWidth(start, end)
    },
    _react2.default.createElement(Element, props)
  );
};

TrackElement.propTypes = {
  time: _react.PropTypes.shape({}).isRequired,
  type: _react.PropTypes.string,
  id: _react.PropTypes.string.isRequired,
  start: _react.PropTypes.instanceOf(Date).isRequired,
  end: _react.PropTypes.instanceOf(Date).isRequired
};

exports.default = TrackElement;
module.exports = exports['default'];