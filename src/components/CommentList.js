import React  from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import CommentForm from '../components/CommentForm/index'

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
    if (!isOpen) return null
    if (!comments.length) return <h3>No comments yet</h3>
    return (
        <div>
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
            </ul>
            <br/>
            <CommentForm/>
        </div>
    )
}

CommentList.defaultProps = {
    comments: [],
    toggleOpen: PropTypes.func,
    isOpen: PropTypes.bool
}

export default toggleOpen(CommentList)