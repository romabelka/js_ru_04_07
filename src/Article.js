import React, {Component} from 'react'
import Comment from './Comment.js'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            showComments: false
        }
    }

    render() {
        const { article } = this.props
        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getCommentsButtonText() {
        let commentsButton = 'Show Comments'

        if (this.state.showComments) {
            commentsButton = 'Hide Comments'
        }

        return commentsButton
    }

    getComments() {
        if (!this.state.showComments) {
            return null;
        }

        const comments = this.props.article.comments
        const commentElements = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return (
            <ul>
                {commentElements}
            </ul>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        return (
            <div>
                <p>{this.props.article.text}</p>
                <button onClick={this.toggleCommentsButton}>
                    {this.getCommentsButtonText()}
                </button>
                {this.getComments()}
            </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleCommentsButton = (ev) => {
        ev.preventDefault()
        this.setState({
            showComments: !this.state.showComments
        })
    }
}

export default Article
