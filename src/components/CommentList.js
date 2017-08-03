import React, {Component} from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadComments} from '../AC'
import Loader from './Loader'

class CommentList extends Component {

    render (){
        const { isOpen, toggleOpen } = this.props
        return (
            <div>
                <button onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</button>
                {this.getBody()}
            </div>
        )
    }

    componentWillReceiveProps({isOpen, article, loadComments}) {
        if (!this.props.isOpen && isOpen) loadComments(article.id)
    }

    getBody() {

        const { comments, article, isOpen } = this.props

        if (!isOpen) return null

        if (comments.loading || !comments.loaded) return <Loader />

        const body = article.comments.length ? (
                <ul>
                    {article.comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
                </ul>
            ) : <h3>No article.comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm articleId = {article.id} />
            </div>
        )
    }

}

CommentList.defaultProps = {
    article: PropTypes.object.isRequired,
    toggleOpen: PropTypes.func,
    isOpen: PropTypes.bool
}

export default connect(({comments}) => ({comments}), {loadComments})(toggleOpen(CommentList))