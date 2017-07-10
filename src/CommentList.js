import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <div>
                <h4 onClick = {this.handleClick}>Comments ({!this.state.isOpen ? 'show' : 'hide'})</h4>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null
        const { comments } = this.props
        const commentElements = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return (
            <ul>
                {commentElements}
            </ul>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList