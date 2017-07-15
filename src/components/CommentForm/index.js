import React, {Component} from 'react';
import './style.css';
import PropTypes from 'prop-types';

class CommentForm extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      text: ''
    }
  }

  render() {
    return (
      <form className="form">
        <div className="form__elem">
          <h3 className="form__title">Add comments</h3>
        </div>
        <div className="form__elem">
          <label className="form__label" htmlFor="username">username:</label>
          <input className="form__input"
                 placeholder="from 10 to 30 symbols"
                 id="username"
                 name="username"
                 type="text"
                 value={this.state.username}
                 onChange={this.handleChange}/>
        </div>
        <div className="form__elem">
          <label className="form__label" htmlFor="text">text:</label>
          <textarea className="form__textarea"
                    placeholder="from 30 to 150 symbols"
                    id="text"
                    name="text"
                    type="text"
                    value={this.state.text}
                    onChange={this.handleChange}>
        </textarea>
        </div>
        <div className="form__elem">
          <div className="buttons">
            <button className="buttons__clear" type="clear" onClick={this.handleClear}>Clear</button>
            <button className="buttons__submit" type="submit" onClick={this.handleSubmit}>Add</button>
          </div>
        </div>

      </form>
    )
  }

  /**
   * Submit Form Handler
   * @param ev {Event}
   */
  handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.target.closest('form');
    if(this.validate(form, this.minMaxSymbols)) {
      const result = {
        username: form.elements.username.value,
        text: form.elements.text.value
      };
      console.log(result);
    } else {
      console.log('error send form')
    }

  };

  /**
   * Reset Form Handler
   * @param ev {Event}
   */
  handleClear = ev => {
    ev.preventDefault();
    this.setState({
      username: '',
      text: ''
    })
  };

  /**
   * Change Data in Input Handler
   * @param ev {Event}
   */
  handleChange = ev => {
    const elem = ev.target.id;
    ev.target.style.borderColor = 'initial';
    this.setState({
      [elem]: ev.target.value
    });
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
      if (elem.nodeName == 'INPUT' && elem.name == 'username') {
        isValid = fnRule(10, 30, elem.value.length);
        if(!isValid) {
          elem.style.borderColor = 'red';
        }
        console.log('input:', isValid);
      }
      if (elem.nodeName == 'TEXTAREA' && elem.name == 'text') {
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
   * Validation rule
   * @param min {number} min value
   * @param max {number} max value
   * @param elem {number} initial value
   * @returns {boolean} result
   */
  minMaxSymbols = (min, max, elem) => {
      return min<=elem==elem<=max
  };
}

export default CommentForm
