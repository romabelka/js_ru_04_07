import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Loader from './Loader'
import Comment from './Comment'
import { loadComments } from '../AC'
import { connect } from 'react-redux'

class Comments extends Comment {

    componentWillMount() {
        const { loadComments, currentPage } = this.props
        loadComments(currentPage)
    }
    componentWillUpdate(nextProps) {
        const { loadComments, currentPage } = this.props
        if(nextProps.currentPage === currentPage) {return}
        loadComments(nextProps.currentPage)
    }
    // componentWillReceiveProps(nextProps) {
    //   const { loadComments, currentPage } = this.props
    //   if(nextProps.currentPage === currentPage) {return}
    //   console.log('!!!!!!', nextProps.currentPage)
    //   loadComments(nextProps.currentPage)
    // }
    render() {
        return (
            <div>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { comments } = this.props
        comments.map(comment => console.log(comment.id))
        const body = comments ? (
            <ul>
                {comments.map(comment => <li key = {comment.id}><div>
                    {comment.text} <b>by {comment.user}</b>
                </div></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
            </div>
        )
    }
}

Comments.defaultProps = {

}

export default connect((state) => ({
  comments: state.comments.comments
}), { loadComments })(Comments)
