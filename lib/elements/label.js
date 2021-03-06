'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classGenerator = require('../mixins/classGenerator');

var _classGenerator2 = _interopRequireDefault(_classGenerator);

var _colorSelector = require('../mixins/colorSelector');

var _colorSelector2 = _interopRequireDefault(_colorSelector);

var _typeSelector = require('../mixins/typeSelector');

var _typeSelector2 = _interopRequireDefault(_typeSelector);

var _unit = require('../commons/unit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultClassName = 'ui label';

var Label = _react2.default.createClass({
  displayName: 'Label',

  mixins: [_classGenerator2.default, _colorSelector2.default, _typeSelector2.default],

  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var type = _props.type;
    var color = _props.color;

    var other = _objectWithoutProperties(_props, ['className', 'type', 'color']);

    return _react2.default.createElement(
      _unit.Unit,
      _extends({}, other, {
        className: this.getClassName(defaultClassName),
        type: this.getType(),
        color: this.getColor() }),
      this.props.children
    );
  }
});

exports.default = Label;