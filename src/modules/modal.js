import React from 'react';
import ReactDOM from 'react-dom';
import ClassGenerator from '../mixins/classGenerator';
import StateSelector from '../mixins/stateSelector';
import {Unit} from '../commons/unit';

let defaultClassName = 'ui modal';

const Modal = React.createClass({

  mixins: [ClassGenerator, StateSelector],

  render: function () {

    let {className, color, type, active, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        color="null"
        type="div"
        active={this.getActive()}>
        {this.props.children}
      </Unit>
    );
  },

  componentDidMount: function () {
    const init = this.props.init;
    const options = this.props.options;
    if (typeof init != 'undefined') {
      if (init === false) {
        return;
      }
      if (init === true) {
        $(ReactDOM.findDOMNode(this)).modal();
      } else {
        if (options) {
          $(ReactDOM.findDOMNode(this)).modal(options).modal(init);
        } else {
          $(ReactDOM.findDOMNode(this)).modal(init);
        }
      }
    }
  }
});

export default Modal;
