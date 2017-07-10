import React from 'react';

function Comment(props) {
    const { comment } = props;
    return (
        <div>
            <p>{comment.user}</p>
            <p>{comment.text}</p>
        </div>
    );
}

export default Comment;