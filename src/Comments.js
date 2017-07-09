import React, {Component} from 'react'

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  render() {
    const {comments} = this.props;

    return (comments !== undefined ? (
      <div>
        <button onClick={this.commentClick}>{this.state.isOpen ? `Hide comments` : `Show comments (${comments.length})`}</button>
        <ul>
          {this.getComments()}
        </ul>
      </div>
    ) : null)
  }

  commentClick = (ev) => {
    ev.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  getComments() {
    const {comments} = this.props;

    if (!this.state.isOpen) return null;

    if (comments !== undefined) {
      return comments.map(comment => {
        return (
          <li key={comment.id}>
            <div><b>User:</b> {comment.user}</div>
            <div><b>Comment:</b> {comment.text}</div>
          </li>
        )
      })
    }
  }
}

export default Comments