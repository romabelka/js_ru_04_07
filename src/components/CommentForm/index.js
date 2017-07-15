import React, {Component} from 'react';
import './style.css';
import PropTypes from 'prop-types';
import validation from '../../decorators/validation';

class CommentForm extends Component {
  static propTypes = {
    validate: PropTypes.func.isRequired,
    minMaxSymbols: PropTypes.func.isRequired,
    removeErrors: PropTypes.func.isRequired
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
    const {validate, minMaxSymbols} = this.props;

    if(validate(form, minMaxSymbols)) {
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
    const form = ev.target.closest('form');

    this.setState({
      username: '',
      text: ''
    });
    this.props.removeErrors(form);
  };

  /**
   * Change Data in Input Handler
   * @param ev {Event}
   */
  handleChange = ev => {
    const elem = ev.target.id;
    const form = ev.target.closest('form');

    this.props.removeErrors(form, ev.target.name);
    this.setState({
      [elem]: ev.target.value
    });
  };
}

export default validation(CommentForm)
