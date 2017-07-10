import React from 'react'

export default function Comment (props) {
    return (
        <div>
            <h3>{props.comment.user}</h3>
            <p>{props.comment.text}</p>
        </div>
    )
}