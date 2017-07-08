import React from 'react'

const ArticleComment = (props) => 
    <li>
        <h3>{props.user}</h3>
        <p>{props.text}</p>
    </li>

export default ArticleComment;