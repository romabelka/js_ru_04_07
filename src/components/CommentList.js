import React  from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

function CommentList(props) {
    const { isOpen, toggleOpen } = props
    return (
        <div>
            <button onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</button>
            {getBody(props)}
        </div>
    )
}

function getBody({ comments, isOpen }) {
    if (!isOpen) return null;
    if (!comments.length) return <h3>No comments yet</h3>;
    return (
        <ul>
            {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
        </ul>
    )
}

CommentList.defaultProps = {
    comments: []
};
CommentList.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
};
getBody.propTypes = {
    comments: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,

};

export default toggleOpen(CommentList)