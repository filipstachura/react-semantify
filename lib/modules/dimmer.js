'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classGenerator = require('../mixins/classGenerator');

var _classGenerator2 = _interopRequireDefault(_classGenerator);

var _stateSelector = require('../mixins/stateSelector');

var _stateSelector2 = _interopRequireDefault(_stateSelector);

var _unit = require('../commons/unit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultClassName = 'ui dimmer';

var Dimmer = _react2.default.createClass({
  displayName: 'Dimmer',

  mixins: [_classGenerator2.default, _stateSelector2.default],

  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var color = _props.color;
    var type = _props.type;
    var disabled = _props.disabled;
    var active = _props.active;

    var other = _objectWithoutProperties(_props, ['className', 'color', 'type', 'disabled', 'active']);

    return _react2.default.createElement(
      _unit.Unit,
      {
        className: this.getClassName(defaultClassName),
        color: 'null',
        type: 'div',
        disabled: this.getDisabled(),
        active: this.getActive() },
      this.props.children
    );
  },

  componentDidMount: function componentDidMount() {
    if (typeof this.props.init != 'undefined') {
      if (this.props.init === false) {
        return;
      }

      if (this.props.init === true) {
        $(_reactDom2.default.findDOMNode(this)).dimmer();
      } else {
        $(_reactDom2.default.findDOMNode(this)).dimmer(this.props.init);
      }
    }
  }
});

exports.default = Dimmer;