import React, {Component, PureComponent} from 'react'
import CommentList from '../CommentList'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import './style.css'
import {connect} from 'react-redux'
import {loadArticle} from '../../AC'
import Loader from '../Loader'

class Article extends Component {
    static propTypes = {
        id: PropTypes.string,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        handleDelete: PropTypes.func,
        //from connect
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        })
    }

    componentDidMount() {
        const {isOpen, id, loadArticle} = this.props
        if (isOpen) loadArticle(id)
    }

    render() {
        const { article, toggleOpen } = this.props
        if (!article) return null
        return (
            <div>
                <h3 onClick = {toggleOpen}>{article.title}</h3>
                <button onClick = {this.deleteArticle}>Delete Article</button>
                <CSSTransitionGroup
                    transitionName = "article"
                    transitionEnterTimeout = {500}
                    transitionLeaveTimeout = {300}
                >
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }

    deleteArticle = () => {
        const {handleDelete, article} = this.props
        if (!handleDelete || !article) return
        handleDelete(article.id)
    }

    getBody() {
        const { article, isOpen } = this.props
        if (!isOpen) return null
        if (article.loading) return <Loader />
        return (
            <div>
                <p>{article.text}</p>
                <CommentList article = {article} ref = "commentList" />
            </div>
        )
    }
}

export default connect((state, {id}) => ({
    article: state.articles.getIn(['entities', id])
}), { loadArticle })(Article)