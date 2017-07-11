import React from 'react'


// компонент простой - пилим функцию
function Comment(props) {
    const { comment } = props;

    return (
        <div>
            <h5>{comment.user}</h5>
            <p>{comment.text}</p>
        </div>
    )
}


export default Comment