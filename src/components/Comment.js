import React from 'react';

function Comment(props) {
    const {text, user} = props.comment;
    return (
        <div className="comment">
            <h5 className="comment__user">{user}</h5>
            <p className="comment__text">{text}</p>
        </div>
    )
}


export default Comment;