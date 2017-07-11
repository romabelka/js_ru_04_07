import React from 'react'
import Comments from './Comments'

function CommentsList({ comments }) {
    const commentsElements = comments.map(comment => <li key = {comment.id}><Comments comment = {comment} /></li>)
    return (
        <ul>
            {commentsElements}
        </ul>
    )
}

export default CommentsList