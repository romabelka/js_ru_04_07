import React, {Component} from 'react';
import {connect} from 'react-redux'
import {loadCommentsByPage} from '../AC'
import {commentsSelector} from '../selectors'
import PropTypes from 'prop-types';
import Comment from './Comment'
import Loader from './Loader'
import {NavLink} from 'react-router-dom'

class CommentsWithPagination extends Component {

    constructor(props){
        super(props);
    }

    state = {
        elCountPerPage : 3
    };

    render(){
        return (
            <div>
                {this.getCommentsByPage()}
                {this.getCommentsPagination()}
            </div>
        )
    }

    componentWillMount(){
        this.callLoadCommentsByPage(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.callLoadCommentsByPage(nextProps)
    }

    callLoadCommentsByPage({page, comments, loading, loadCommentsByPage}){
        if (!comments && !loading)
        {
            const {elCountPerPage} = this.state;
            loadCommentsByPage(page, elCountPerPage);
        }
    }

    getCommentsByPage(){
        const {comments, loading, allComments} = this.props
        if (loading || !comments) return <Loader />
        return (
            <ul>
                {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
            </ul>
        )
    }

    getCommentsPagination(){
        const {page, total} = this.props;
        const {elCountPerPage} = this.state;
        let paginationItems = [];
        for (let i = 1; i <= Math.ceil(total/elCountPerPage); i++)
        {
            paginationItems.push(<li key={i}><NavLink to = {`/comments/${i}`} activeStyle={{
                fontWeight: 'bold',
                color: 'red'
            }}>{i}</NavLink></li>)
        }
        return (
            <ul>
                {paginationItems}
            </ul>
        )
    }

}

CommentsWithPagination.propTypes = {};
CommentsWithPagination.defaultProps = {};

export default connect(
    ({ comments }, { page }) => {
        const {total, pagination} = comments
        return {
            comments: pagination.getIn([page, 'loadedId']),
            loading: pagination.getIn([page, 'loading']),
            total
        }
    },
    { loadCommentsByPage }
)(CommentsWithPagination);
