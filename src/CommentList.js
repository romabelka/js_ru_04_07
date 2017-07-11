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
                <button onClick = {this.handleClick}>{this.state.isOpen ? 'Hide Comments' : 'Show Comments'}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const { comments } = this.props;
        const commentsList = comments.map((comment) => <li key={ comment.id }><Comment comment = { comment } /></li>);

        return <ul>{commentsList}</ul>
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList