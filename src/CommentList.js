import React from 'react'
import Comment from './Comment'

function CommentList({ comments }) {
    const commentList = comments ? comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>) : null;

    return (
        <ul>
            { commentList }
        </ul>
    )
}

export default CommentList