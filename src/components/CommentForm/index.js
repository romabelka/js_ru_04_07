import React, { Component } from 'react';
import './style.css';

class CommentForm extends Component {
  static propTypes = {

  }
  state = {
    name: '',
    comment: '',
    isValidName: false,
    isValidComment: false
  }
  render() {
    const { name, comment } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text"
             className={this.state.isValidName || name.length === 0 ? '' : 'not-valid-input'}
             value={name}
             onChange={this.handleNameChange}/>
        </label><br />
        <label>
          Comment:
          <textarea
            className={this.state.isValidComment || comment.length === 0 ? '' : 'not-valid-input'}
            value={comment}
            onChange={this.handleCommentChange}/>
        </label><br />
        <button>Add Comment</button>
      </form>
    );
  }
  handleNameChange = (e) => {
    let name = e.target.value.substring(0, 30);
    this.setState({
      name,
      isValidName: name.length >= 10
    });
  }
  handleCommentChange = (e) => {
    let comment = e.target.value.substring(0, 150);
    this.setState({
      comment,
      isValidComment: comment.length >= 30
     });
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
}

export default CommentForm;
