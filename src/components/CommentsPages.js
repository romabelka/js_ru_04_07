import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import Comment from './Comment'
import Loader from './Loader'
import {NavLink} from 'react-router-dom'
import {loadCommentsPagination} from '../AC'

class CommentsPagination extends Component {
	//загрузка
    componentWillMount() {
        this.props.loadCommentsPagination(this.props.page)
    }
	//обновление
    componentWillReceiveProps({ page, loadCommentsPagination }) {
        loadCommentsPagination(page)
    }

    render() {
        const {total} = this.props
        if (!total) return <Loader/>
		let paginationBlock =  this.getPagination()
        return (
            <div>
				{paginationBlock}
                {this.getComments()}
                {paginationBlock}
            </div>
        )
    }

    getComments() {
        const {comments, loading} = this.props
        if (loading || !comments) return <Loader />
        const commentItems = comments.map(id => <li key={id}><Comment id={id}/></li>)
        return <ul>{commentItems}</ul>
    }

    getPagination() {
        const {total, page} = this.props
		console.log(this.props)
        const paginationArr = []
        for (let i = 1; i <= Math.floor((total - 1) / 5) + 1; i++) {
			if(page == i){
				paginationArr.push(<span key={i}>{i}&nbsp;</span>)
				continue
			} 
            paginationArr.push(<span key={i}><NavLink to={`/comments/${i}`}>{i}</NavLink>&nbsp;</span>)
        }
        return <div>{paginationArr}</div>
    }
}

function mapStateToProps(state, { page }) {
    const {pagination, total} = state.comments
    return {
        loading: pagination.getIn([page, 'loading']),
        comments: pagination.getIn([page, 'ids']),
		total
    }
}

export default connect(mapStateToProps, { loadCommentsPagination })(CommentsPagination)