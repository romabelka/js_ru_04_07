import React, {Component} from 'react'
import Comment from './Comment'

class CommentsList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleCommentsButton}>
                    {this.getCommentsButtonText()}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        const {comments} = this.props

        if (!comments || !comments.length) {
            return (
                <div>
                    No comments
                </div>
            )
        }

        const commentElements = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)

        return (
            <ul>
                {commentElements}
            </ul>
        )
    }

    toggleCommentsButton = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getCommentsButtonText() {
        if (this.state.isOpen) {
            return 'Hide Comments'
        }

        return 'Show Comments'
    }
}

export default CommentsList