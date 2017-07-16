import React, {Component} from 'react';

export default (OriginalComponent) => class Validation extends Component {

  constructor(props) {
    super(props);
  };

  /**
   * Validation
   * @param form {HTMLFormElement} // form
   * @param fnRule {function} // validate rule
   * @returns {boolean}
   */
  validate = (form, fnRule) => {
    let isValid = true;
    [].forEach.call(form.elements, elem => {
      if (elem.nodeName == 'INPUT') {
        isValid = fnRule(10, 30, elem.value.length);
        if(!isValid) {
          elem.style.borderColor = 'red';
        }
        console.log('input:', isValid);
      }
      if (elem.nodeName == 'TEXTAREA') {
        isValid = fnRule(30, 150, elem.value.length);
        console.log('textarea:', isValid);
        if(!isValid) {
          elem.style.borderColor = 'red';
        }
      }
    });
    return isValid;
  };

  /**
   * Clear form or single element form error
   * @param form {HTMLFormElement}
   * @param singleElemName {string}
   */
  removeErrors = (form, singleElemName) => {
    if(singleElemName) {
      form.elements[singleElemName].style.borderColor = 'initial';
    } else {
      [].forEach.call(form.elements, elem => {
        if (elem.nodeName == 'INPUT' || elem.nodeName == 'TEXTAREA') {
          elem.style.borderColor = 'initial';
        }
      });
    }
  };
  /**
   * Validation rule
   * @param min {number} min value
   * @param max {number} max value
   * @param elem {number} initial value
   * @returns {boolean} result
   */
  minMaxSymbols = (min, max, elem) => {
    return min<=elem==elem<=max
  };

  render() {
    return (
      <OriginalComponent
        {...this.props}
        validate = {this.validate}
        minMaxSymbols = {this.minMaxSymbols}
        removeErrors = {this.removeErrors}
      />
    )
  }
}