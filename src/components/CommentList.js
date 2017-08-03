import React  from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'
import {loadComment} from '../AC';
import PropTypes from 'prop-types'
import Loader from './Loader'

import {connect} from 'react-redux'

class CommentList extends React.Component {

    static defaultProps = {
        article: PropTypes.object.isRequired,
        toggleOpen: PropTypes.func,
        isOpen: PropTypes.bool
    }

    componentWillReceiveProps({isOpen, article, loadComment}) {
        if (!this.props.isOpen && isOpen) loadComment(article.id)
    }

    render() {
        console.log('*** CommentList props = ', this.props);
        const { isOpen, toggleOpen } = this.props;
        return (
            <div>
                <button onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</button>
                {this.getBody(this.props)}
            </div>
        )
    }

    getBody(props/*{ article: {comments, id}, isOpen }*/) {
        const {isOpen} = props;
        const article = props.article.toJS();
        const {comments, idArticle} = article;

        console.log('*** article = ', article,idArticle == this.props.articleLoading && this.props.loading )
        console.log('*** article2 = ', idArticle, this.props.articleLoading, this.props.loading )

        if (!isOpen) return null
        
        if (idArticle == this.props.articleLoading && this.props.loading) {
            return <Loader/>
        }
        
        const body = comments.length ? (
            <ul>
                {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm articleId = {idArticle} />
            </div>
        )
    }
}




export default connect(
    (state) => ({
        loading: state.comments.loading,
        articleLoading: state.comments.articleLoading
    }), 
    {loadComment}
)(toggleOpen(CommentList));