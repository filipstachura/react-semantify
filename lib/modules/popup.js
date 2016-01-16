'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classGenerator = require('../mixins/classGenerator');

var _classGenerator2 = _interopRequireDefault(_classGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultClassName = 'ui popup';

var Popup = _react2.default.createClass({
  displayName: 'Popup',

  mixins: [_classGenerator2.default],

  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: this.getClassName(defaultClassName) },
      this.props.children
    );
  }
});

exports.default = Popup;