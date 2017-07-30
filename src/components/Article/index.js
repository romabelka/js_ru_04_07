import React, {Component, PureComponent} from 'react'
import CommentList from '../CommentList'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import './style.css'
import {connect} from 'react-redux'
import {commentsSelectorFactory} from '../../selectors'

class Article extends Component {
    static propTypes = {
        //connect
        comments: PropTypes.array,
        // own props
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        handleDelete: PropTypes.func.isRequired
    }

    /*
     shouldComponentUpdate(nextProps, nextState) {
     return nextProps.isOpen !== this.props.isOpen
     }

     */
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
        const { article, isOpen, comments } = this.props
        if (!isOpen) return null
        return (
            <div>
                <p>{article.text}</p>
                <CommentList comments = {comments} />
            </div>
        )
    }
}



const createMapStateToProps = () => {
  const commentsSelector = commentsSelectorFactory()

  return (state, ownProps) => ({
    comments: commentsSelector(state, ownProps)
  })
}

export default connect(createMapStateToProps)(Article)