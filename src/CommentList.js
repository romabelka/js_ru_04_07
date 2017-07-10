import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        return (
            <div>
                <button onClick = {this.handleClick}>{this.getButtonName()}</button>
                {this.getBody()}
            </div>
        );
    }

    getButtonName() {
        if (!this.state.isOpen) return 'Show comments';

        return 'Hide comments';
    }

    getBody() {
        if (!this.state.isOpen) return null;
        let commentElements = (<li>No comments yet</li>);

        if (this.props.comments)
            commentElements = this.props.comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>);

        return (
            <ul>
                {commentElements}
            </ul>
        );
    }

    handleClick = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

export default CommentList;