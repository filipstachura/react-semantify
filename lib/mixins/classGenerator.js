'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  propTypes: {
    className: _react2.default.PropTypes.string
  },

  getClassName: function getClassName(defaultClassName, addClassName) {
    var classResult = defaultClassName;

    if (typeof this.props.className !== 'undefined') {
      classResult += ' ' + this.props.className;
    }

    if (typeof addClassName !== 'undefined') {
      if ((typeof addClassName === 'undefined' ? 'undefined' : _typeof(addClassName)) === 'object') {
        classResult += ' ' + (0, _classnames2.default)(addClassName);
      } else {
        classResult += ' ' + addClassName;
      }
    }

    return classResult;
  }
};