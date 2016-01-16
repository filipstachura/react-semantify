'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classGenerator = require('../mixins/classGenerator');

var _classGenerator2 = _interopRequireDefault(_classGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultClassName = 'ui accordion';

var Accordion = _react2.default.createClass({
  displayName: 'Accordion',

  mixins: [_classGenerator2.default],

  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: this.getClassName(defaultClassName), ref: 'accordion' },
      this.props.children
    );
  },

  componentDidMount: function componentDidMount() {
    if (typeof this.props.init != 'undefined') {
      if (this.props.init === false) {
        return;
      }

      if (this.props.init === true) {
        $(this.refs.accordion).accordion();
      } else {
        $(this.refs.accordion).accordion(this.props.init);
      }
    }
  }
});

exports.default = Accordion;