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

var _stateSelector = require('../mixins/stateSelector');

var _stateSelector2 = _interopRequireDefault(_stateSelector);

var _unit = require('../commons/unit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultClassName = 'icon';

var Icon = _react2.default.createClass({
  displayName: 'Icon',

  mixins: [_classGenerator2.default, _colorSelector2.default, _stateSelector2.default],

  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var color = _props.color;

    var other = _objectWithoutProperties(_props, ['className', 'color']);

    return _react2.default.createElement(_unit.Unit, _extends({}, other, {
      className: this.getClassName(defaultClassName),
      type: 'icon',
      color: this.getColor(),
      disabled: this.getDisabled(),
      loading: this.getLoading() }));
  }
});

exports.default = Icon;