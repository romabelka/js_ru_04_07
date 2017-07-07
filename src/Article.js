import React, {Component} from 'react'
import CommentsList from './CommentsList'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            isCommentsOpen: false
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

    getBody() {
        if (!this.state.isOpen) return null

        return (
            <div>
                <p>{this.props.article.text}</p>
                {this.getComments()}
            </div>
        )
    }

    getComments() {
        if (!this.state.isCommentsOpen) return <div onClick = {this.handleCommentsClick}>Show Comments</div>
        if (this.props.article.comments) return (
            <div>
                <div onClick = {this.handleCommentsClick}>Hide Comments</div>
                <CommentsList comments = {this.props.article.comments} />
            </div>
        )
        return (
            <div>
                <div onClick = {this.handleCommentsClick}>Hide Comments</div>
                <div>No comments</div>
            </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleCommentsClick = (ev) => {
        ev.preventDefault()
        this.setState({
            isCommentsOpen: !this.state.isCommentsOpen
        })
    }
}

export default Article