import React from 'react';

function CommnetsList({ comments }) {
  const commentsElement = comments.map(comment => <li key = {comment.id}><div>{comment.user}</div><div>{comment.text}</div></li>)
    return (
        <ul>
          {commentsElement}
        </ul>
    )
}

export default CommnetsList
