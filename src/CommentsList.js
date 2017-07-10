import React, {Component} from 'react';
import Comment from './Comment';


class  CommentsList extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    const { comments } = this.props
    const commentsElements = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
    return (
      <div>
        <ul>
            {commentsElements}
        </ul>
      </div>
    )
  }


}

export default CommentsList
