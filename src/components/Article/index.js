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
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        handleDelete: PropTypes.func.isRequired
    }

    componentWillReceiveProps({isOpen, article, loadArticle}) {
        if (!this.props.isOpen && isOpen) loadArticle(article.id)
    }

    render() {
        const { article, toggleOpen } = this.props
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
        handleDelete(article.id)
    }

    getBody() {
        const { article, isOpen } = this.props
        if (!isOpen) return null
        if (article.loading) return <Loader />
        return (
            <div>
                <p>{article.text}</p>
                <CommentList article = {article} />
            </div>
        )
    }
}

export default connect(null, { loadArticle })(Article)