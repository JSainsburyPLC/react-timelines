'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _datePropType = require('../../utils/datePropType');

var _datePropType2 = _interopRequireDefault(_datePropType);

var _formatDate = require('../../utils/formatDate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Basic = function Basic(_ref) {
  var title = _ref.title,
      start = _ref.start,
      end = _ref.end,
      style = _ref.style;
  return _react2.default.createElement(
    'div',
    { className: 'element', style: style },
    _react2.default.createElement(
      'div',
      { className: 'element__content', 'aria-hidden': 'true' },
      title
    ),
    _react2.default.createElement(
      'div',
      { className: 'element__tooltip' },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'strong',
          null,
          'Title'
        ),
        ' ',
        title
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'strong',
          null,
          'Start'
        ),
        ' ',
        (0, _formatDate.getDayMonth)(start.toDate())
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'strong',
          null,
          'End Date'
        ),
        ' ',
        (0, _formatDate.getDayMonth)(end.toDate())
      )
    )
  );
};

Basic.propTypes = {
  title: _react.PropTypes.string,
  start: _datePropType2.default,
  end: _datePropType2.default,
  style: _react.PropTypes.shape({})
};

exports.default = Basic;
module.exports = exports['default'];