import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Loader from './Loader'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'
import { loadArticleComments } from '../AC'
import { connect } from 'react-redux'

class CommentList extends Comment {
    componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id)
        }
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        return (
            <div>
                <button onClick={toggleOpen}>{isOpen ? 'hide' : 'show'} comments</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article: {comments, id, commentsLoading, commentsLoaded}, isOpen } = this.props
        if (!isOpen) return null
        if (commentsLoading) return <Loader />
        if (!commentsLoaded) return null

        const body = comments.length ? (
            <ul>
                {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm articleId = {id} />
            </div>
        )
    }
}

CommentList.defaultProps = {
    article: PropTypes.object.isRequired,
    toggleOpen: PropTypes.func,
    isOpen: PropTypes.bool
}

export default connect(null, { loadArticleComments })(toggleOpen(CommentList))