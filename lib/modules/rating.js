'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classGenerator = require('../mixins/classGenerator');

var _classGenerator2 = _interopRequireDefault(_classGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultClassName = 'ui rating';

var Rating = _react2.default.createClass({
  displayName: 'Rating',

  mixins: [_classGenerator2.default],

  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var rating = _props.rating;
    var maxRating = _props.maxRating;

    var other = _objectWithoutProperties(_props, ['className', 'rating', 'maxRating']);

    return _react2.default.createElement(
      'div',
      _extends({}, other, {
        className: this.getClassName(defaultClassName),
        'data-rating': rating,
        'data-max-rating': maxRating,
        ref: 'rating' }),
      this.props.children
    );
  },

  componentDidMount: function componentDidMount() {
    if (typeof this.props.init != 'undefined') {
      if (this.props.init === false) {
        return;
      }

      if (this.props.init === true) {
        $(this.refs.rating).rating();
      } else {
        $(this.refs.rating).rating(this.props.init);
      }
    }
  }
});

exports.default = Rating;