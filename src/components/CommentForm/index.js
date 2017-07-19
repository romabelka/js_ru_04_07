import React, {Component} from 'react';
import './style.css';
import PropTypes from 'prop-types';

class CommentForm extends Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      text: ''
    };
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__elem">
          <h3 className="form__title">Add comments</h3>
        </div>
        <div className="form__elem">
          <label className="form__label" htmlFor="username">username:</label>
          <input className={"form__input " + this.isValid('username')}
                 placeholder="from 10 to 30 symbols"
                 id="username"
                 name="username"
                 type="text"
                 value={this.state.username}
                 onChange={this.handleChange('username')}/>
        </div>
        <div className="form__elem">
          <label className="form__label" htmlFor="text">text:</label>
          <textarea placeholder="from 30 to 150 symbols"
                    id="text"
                    name="text"
                    type="text"
                    value={this.state.text}
                    onChange={this.handleChange('text')}
                    className = {"form__textarea " + this.isValid('text')}>
        </textarea>
        </div>
        <div className="form__elem">
          <div className="buttons">
            <button className="buttons__clear" type="clear" onClick={this.handleClear}>Clear</button>
            <button className="buttons__submit" type="submit">Add</button>
          </div>
        </div>

      </form>
    )
  }

  /**
   * Valid enter Data
   * @param type {string}
   */
  isValid = type => this.validate(type) ? '' : 'error';

  /**
   * Validation
   * @param type {string}
   */
  validate (type) {
    if (this.state[type].length){
      return limits[type].min < this.state[type].length == this.state[type].length < limits[type].max;
    } else {
      return false
    }
  };

  /**
   * Submit Form Handler
   * @param ev {Event}
   */
  handleSubmit = ev => {
    ev.preventDefault();
    if (this.validate('username') && this.validate('text')) {
      const result = {
        username: this.state.username,
        text: this.state.text
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
    });
  };

  /**
   * Change Data in Input Handler
   * @param type {string}
   */
  handleChange = type => ev => {
    const {value} = ev.target;
    this.setState({
      [type]: value
    });
  };
}

/**
 * Limits data for validation
 * @type {{username: {min: number, max: number}, text: {min: number, max: number}}}
 */
const limits = {
  username: {
    min: 10,
    max: 30
  },
  text: {
    min: 30,
    max: 150
  }
};

export default CommentForm
