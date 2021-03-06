'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classGenerator = require('../mixins/classGenerator');

var _classGenerator2 = _interopRequireDefault(_classGenerator);

var _stateSelector = require('../mixins/stateSelector');

var _stateSelector2 = _interopRequireDefault(_stateSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultClassName = 'ui tab';

var Tab = _react2.default.createClass({
  displayName: 'Tab',

  mixins: [_classGenerator2.default, _stateSelector2.default],

  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var active = _props.active;
    var loading = _props.loading;
    var tab = _props.tab;

    var other = _objectWithoutProperties(_props, ['className', 'active', 'loading', 'tab']);

    var state = {
      active: this.getActive(),
      loading: this.getLoading()
    };

    return _react2.default.createElement(
      'div',
      _extends({}, other, {
        className: this.getClassName(defaultClassName, state),
        'data-tab': tab,
        ref: 'tab' }),
      this.props.children
    );
  },

  componentDidMount: function componentDidMount() {
    if (typeof this.props.init != 'undefined') {
      if (this.props.init === false) {
        return;
      }

      if (this.props.init === true) {
        $(this.refs.tab).tab();
      } else {
        $(this.refs.tab).tab(this.props.init);
      }
    }
  }
});

exports.default = Tab;