import React from 'react';

function Comment(props) {
  const { comment } = props;

  return (
    <div>
      <div>{comment.user}</div>
      <p>{comment.text}</p>
    </div>

  )
}

export default Comment
