import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {loadComments} from '../AC'
import Comment from './Comment'
import Loader from './Loader'
import Immutable from 'immutable'

class AllCommentsList extends Component {
    componentWillMount() {
        const {page, loading, loaded, loadComments} = this.props
        if (!loading.has(page) && !loaded.has(page)) {
            loadComments(page)
        }
    }

    render() {
        return (
            <div>{this.getComments()}</div>
        );
    }

    getComments() {
        const {page, loading, commentsOnPage} = this.props
        const comments = commentsOnPage.get(page)

        if (loading.has(page)) return <Loader />
        if (!comments) return null

        return comments.length ? (
            <ul>
                {comments.map(id => <li key={id}><Comment id={id}/></li>)}
            </ul>
        ) : <h3>No comments</h3>
    }
}

AllCommentsList.propTypes = {
    commentsOnPage: PropTypes.instanceOf(Immutable.Map),
    loading: PropTypes.instanceOf(Immutable.Set),
    loaded: PropTypes.instanceOf(Immutable.Set)
};
AllCommentsList.defaultProps = {};


export default connect(({comments}) => ({
        loading: comments.pages.loading,
        loaded: comments.pages.loaded,
        commentsOnPage: comments.pages.commentsOnPage
    }),
    {loadComments})(AllCommentsList)