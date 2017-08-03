import React, {Component}  from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadAllComments} from '../AC'
import Loader from './Loader'
import {mapToArr} from "../helpers";

class CommentList extends Component {

  componentWillReceiveProps({isOpen, article: {id}, loadAllComments}) {
    if (!this.props.isOpen && isOpen) loadAllComments(id)
  }
  render() {
    const { isOpen, toggleOpen, article: {id}} = this.props
    return (
      <div>
          <button onClick = {toggleOpen}> {isOpen ? 'hide' : 'show'} comments</button>
          {this.getBody(this.props)}
      </div>
    )
  }
  getBody = ({ article: {id}, isOpen, comments, loading }) => {
    if (!isOpen) return null
    if (loading) return <Loader />

    const body = comments.length ? (
      <ul>
        {comments.map(comment => <li key = {comment.id}><Comment id = {comment.id} /></li>)}
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


CommentList.propTypes = {
    //own
    article: PropTypes.object.isRequired,
    toggleOpen: PropTypes.func,
    isOpen: PropTypes.bool,

  //from connect
  loadAllComments: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  loading: PropTypes.bool
}



export default connect(
  (state) => ({
    comments: mapToArr(state.comments.entities),
    loading: state.comments.loading
  }),
  { loadAllComments }
)(toggleOpen(CommentList))