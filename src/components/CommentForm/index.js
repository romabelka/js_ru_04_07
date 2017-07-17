import React, {Component, PureComponent} from 'react'
import './style.css'

class CommentForm extends Component {
    static propTypes = {

    }
    state = {
      username: '',
      comment: '',
      inputValid: true,
      textAreaValid: true
    }
    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='username'>User name</label>
                <input type='text' name='username' onChange = {this.inputChange} value = {this.state.username} className={this.errorClass(this.state.inputValid)}></input>
                <label htmlFor='comment'>Comment</label>
                <textarea name='comment' onChange = {this.inputChange} value = {this.state.comment} className={this.errorClass(this.state.textAreaValid)}></textarea>
                <button type='submit'>Submit</button>
            </form>
        )
    }

    errorClass(error) {
      return(error ? '' : 'error');
   }

    inputChange = ev => {
      const name = ev.target.name;
      const value = ev.target.value;
      this.setState({
              [name]: value
          }, () => {this.validateInput(name, value)})
    }

    validateInput(name, value) {
      switch(name) {
        case 'username':
          if(value.length < 10 || value.length > 30) {
            this.setState({
              [name]: value.substring(0, 30),
              inputValid: false
            })
          } else {
            this.setState({
              inputValid: true
            })
          }
      break;
        case 'comment': {
          if(value.length < 30 || value.length > 150) {
            this.setState({
              [name]: value.substring(0, 150),
              textAreaValid: false
            })
          } else {
            this.setState({
              textAreaValid: true
            })
          }
        }
      break;
      default:
      break;  
      }
    }

    handleSubmit = ev => {
      ev.preventDefault();
      if(this.state.inputValid && this.state.textAreaValid) {
        alert('Ok!');
      }

    }


}

export default CommentForm
