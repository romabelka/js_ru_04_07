import React from 'react';

export default function Comment (props) {
    return (
        <li>
            <div>{props.user}</div>
            <div>{props.text}</div>
        </li>
    )
}
