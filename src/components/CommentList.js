import React, {Component} from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import { loadComments } from '../AC'
import { connect } from 'react-redux'
import Loader from './Loader'

class CommentList extends Component {
    componentWillReceiveProps({ isOpen, article, loadComments }) {
		//если открывается впервые и если состояние не загрузка
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadComments(article.id)
        }
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {getBody(this.props)}
            </div>
        )
    }
}

function getBody({article: {comments = [], id, commentsLoaded, commentsLoading}, isOpen}) {
    if (!isOpen) return null
    if (commentsLoading) return <Loader />
    if (!commentsLoaded) return null

    if (!comments.length) return (
        <div>
            <p>No comments yet</p>
            <CommentForm articleId = {id} />
        </div>
    )

    return (
        <div>
            <ul>
                {comments.map(id => <li key={id}><Comment id = {id}/></li>)}
            </ul>
            <CommentForm articleId = {id} />
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

export default connect(null, {loadComments})(toggleOpen(CommentList))