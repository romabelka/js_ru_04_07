import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Loader from './Loader'
import Comment from './Comment'
import CommentForm from './CommentForm'
import LocalizedText from './LocalizedText'
import toggleOpen from '../decorators/toggleOpen'
import { loadArticleComments } from '../AC'
import { connect } from 'react-redux'

class CommentList extends Component {
    static contextTypes = {
        store: PropTypes.object,
        user: PropTypes.string,
        router: PropTypes.object
    }

    componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id)
        }
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <h3>Username: {this.context.user}</h3>
                <button onClick={toggleOpen}><LocalizedText>{text}</LocalizedText></button>
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
        ) : <h3><LocalizedText>No comments yet</LocalizedText></h3>

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

export default connect(null, { loadArticleComments }, null, { pure: false })(toggleOpen(CommentList))