import React from 'react'
import Comment from './Comment'

function CommentsList({ comments }) {
    const commentElements = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
    return (
        <ul>
            {commentElements}
        </ul>
    )
}

export default CommentsList