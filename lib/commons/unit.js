'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Unit = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Unit = exports.Unit = _react2.default.createClass({
  displayName: 'Unit',

  propTypes: {
    className: _react2.default.PropTypes.string.isRequired,
    type: _react2.default.PropTypes.string.isRequired,
    color: _react2.default.PropTypes.string.isRequired
  },

  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var type = _props.type;
    var color = _props.color;
    var value = _props.value;
    var disabled = _props.disabled;
    var active = _props.active;
    var loading = _props.loading;

    var other = _objectWithoutProperties(_props, ['className', 'type', 'color', 'value', 'disabled', 'active', 'loading']);

    switch (type) {

      case 'link':
        return _react2.default.createElement(
          'a',
          _extends({}, other, {
            className: this._generateClassName(),
            'data-value': value }),
          this.props.children
        );

      case 'icon':
        return _react2.default.createElement(
          'i',
          _extends({}, other, {
            className: this._generateClassName(),
            'data-value': value }),
          this.props.children
        );

      case 'img':
        return _react2.default.createElement(
          'img',
          _extends({}, other, {
            className: this._generateClassName() }),
          this.props.children
        );

      case 'div':
      default:
        return _react2.default.createElement(
          'div',
          _extends({}, other, {
            className: this._generateClassName(),
            'data-value': value }),
          this.props.children
        );
    }
  },

  _generateClassName: function _generateClassName() {
    var className = this.props.className;

    if (this.props.color != 'null') {
      className += ' ' + this.props.color;
    }

    className += ' ' + (0, _classnames2.default)({
      'disabled': this.props.disabled,
      'active': this.props.active,
      'loading': this.props.loading,
      'focus': this.props.focus,
      'error': this.props.error,
      'completed': this.props.completed,
      'read-only': this.props.readOnly
    });

    return className;
  }
});