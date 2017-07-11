import React from 'react'


function Comment({comment}) {
    return (
        <div>
            <b>{comment.user}</b>
            <p>{comment.text}</p>
        </div>
    )
}

export default Comment
