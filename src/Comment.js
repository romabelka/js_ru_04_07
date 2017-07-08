import React from 'react'

const Comment = ({ comment }) =>
    <li>
        <em>{ comment.user }</em>
        <p>{ comment.text }</p>
    </li>

export default Comment;