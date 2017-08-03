import React, {Component}  from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadComments} from '../AC'
import Loader from './Loader'


class CommentList extends Component {

  componentWillReceiveProps({isOpen, article, loadComments}) {
      if (!this.props.isOpen && isOpen) loadComments(article.id)
  }

    render() {
      const { isOpen, toggleOpen } = this.props

      return (
          <div>
              <button onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</button>
              {this.getBody()}
          </div>
      )
    }

    getBody() {
        const { article: {comments, id}, isOpen, toggleOpen, loading } = this.props
        if (!isOpen) return null
        if (loading) return <Loader />

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

export default connect(
        (state) => ({
        loading: state.comments.loading
    }), { loadComments })(toggleOpen(CommentList))
