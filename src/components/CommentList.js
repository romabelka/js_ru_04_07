import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Loader from './Loader'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'
import { loadArticleComments } from '../AC'
import { connect } from 'react-redux'
import localization from '../decorators/localization'

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
        console.log('---', 4)
        return (
            <div>
                <h3>Username: {this.context.user}</h3>
                <button onClick={toggleOpen}>{isOpen ? this.props.dict.hide_comments : this.props.dict.show_comments}</button>
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

export default connect(null, { loadArticleComments }, null, { pure: false })(toggleOpen(localization(CommentList)))