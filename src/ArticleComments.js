import React from 'react';

export default ({ comments }) => {
  return (<ul>
    {comments.map(comment => {
      return (<li key={comment.id}>
        <b>{comment.user}</b>
        <p>{comment.text}</p>
      </li>);
    })}
  </ul>);
};
