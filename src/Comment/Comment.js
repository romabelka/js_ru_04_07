import React from 'react'

function Comment({comment}) {
    return <div>
        <b>{comment.id} {comment.user}</b> : {comment.text}
        <hr />
    </div>
}

export default Comment