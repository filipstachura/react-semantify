'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classGenerator = require('../mixins/classGenerator');

var _classGenerator2 = _interopRequireDefault(_classGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultClassName = 'ui items';

var Items = _react2.default.createClass({
  displayName: 'Items',

  mixins: [_classGenerator2.default],

  propTypes: {
    className: _react2.default.PropTypes.string,
    type: _react2.default.PropTypes.string
  },

  render: function render() {
    var type = '';

    if (typeof this.props.type != 'undefined') {
      if (this.props.type == 'link') {
        type = 'link';
      }
    }

    return _react2.default.createElement(
      'div',
      { className: this.getClassName(defaultClassName, type) },
      this.props.children
    );
  }
});

exports.default = Items;