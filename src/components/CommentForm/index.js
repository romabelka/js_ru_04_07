import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';

class CommentForm extends Component {
  static propTypes = {

  };
  constructor (props) {
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
          <label className="form__label" htmlFor = "username">username:</label>
          <input className="form__input"
                 id = "username"
                 name = "username"
                 type = "text"
                 value = {this.state.username}
                 onChange = {this.handleChange} />
        </div>
        <div className="form__elem">
          <label className="form__label" htmlFor = "text">text:</label>
          <textarea className="form__textarea"
                 id = "text"
                 name = "text"
                 type = "text"
                 value = {this.state.text}
                 onChange = {this.handleChange}>
        </textarea>
        </div>
        <div className="form__elem">
          <div className="buttons">
            <button className="buttons__clear" type="clear" onClick = {this.handleClear}>Clear</button>
            <button className="buttons__submit" type="submit" onClick = {this.handleSubmit}>Add</button>
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
    const result = {
      username: form.elements.username.value,
      text: form.elements.text.value
    };
    console.log(result);
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
    //ev.target.style.borderColor = 'initial';
    this.setState({
      [elem]: ev.target.value
    });
  };
    // if (ev.target.value.length > 15) {
    //   return this.setState({
    //     username: ''
    //   })
    // }


    /*
     this.setState({
     username: ''
     })
     */

}

export default CommentForm
