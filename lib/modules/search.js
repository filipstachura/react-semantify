'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var defaultClassName = 'ui search';

var Search = _react2.default.createClass({
  displayName: 'Search',

  mixins: [_classGenerator2.default, _stateSelector2.default],

  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var color = _props.color;
    var type = _props.type;
    var active = _props.active;

    var other = _objectWithoutProperties(_props, ['className', 'color', 'type', 'active']);

    return _react2.default.createElement(
      _unit.Unit,
      _extends({}, other, {
        className: this.getClassName(defaultClassName),
        color: 'null',
        type: 'div',
        loading: this.getLoading() }),
      this.props.children
    );
  },

  componentDidMount: function componentDidMount() {
    if (typeof this.props.init != 'undefined') {
      if (this.props.init === false) {
        return;
      }

      if (this.props.init === true) {
        $(_reactDom2.default.findDOMNode(this)).search();
      } else {
        $(_reactDom2.default.findDOMNode(this)).search(this.props.init);
      }
    }
  }
});

exports.default = Search;