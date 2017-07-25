import React  from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'

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
    const body = comments.length ? (
        <ul>
            {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
        </ul>
    ) : <h3>No comments yet</h3>

    return (
        <div>
            {body}
            <CommentForm />
        </div>
    )
}

CommentList.defaultProps = {
    comments: [],
    toggleOpen: PropTypes.func,
    isOpen: PropTypes.bool
}

export default toggleOpen(CommentList)