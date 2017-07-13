import React  from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'

const CommentList = (props) => {
    const { isOpen, toggleOpen } = props;
    return (
        <div>
            <button onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</button>
            <Body {...props}/>
        </div>
    )
};

const Body = ({ comments, isOpen }) => {
    if (!isOpen) return null;
    if (!comments.length) return <i>No comments yet</i>;
    return (
        <ul>
            {comments.map(comment => <li key = {comment.id}><Comment {...comment} /></li>)}
        </ul>
    )
};

CommentList.defaultProps = {
    comments: []
};
CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired
};

export default toggleOpen(CommentList)