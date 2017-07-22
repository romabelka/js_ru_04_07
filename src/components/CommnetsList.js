import React, {Component} from 'react'
import Comment from './Comment'
import ToggleOpen from '../decorators/ToggleOpen';

function CommnetList(props) {
    const {isOpen, toggleOpen} = props;

    return (
        <div>
            <a href="#" onClick={toggleOpen}>{isOpen ? 'close' : 'open'} comments</a>
            {getBody(props)}
        </div>
    )
}

function  getBody({isOpen, comments}) {
    if (!isOpen) return null;
    if (!comments || !comments.length) return <span> No comments yet</span>

    return (

        <ul>
            {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
        </ul>
    )
}

CommnetList.defaultProps = {
    comments: []
};

export default ToggleOpen(CommnetList);
