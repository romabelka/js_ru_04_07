import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    render() {
        const button = <button onClick={this.toggleOpen}>{this.state.isOpen ? "Hide" : "Show"} comments</button>;

        return (
            <div>
                { button }
                { this.getComments(this.props) }
            </div>
        )
    }

    getComments({comments}) {
        if (!this.state.isOpen) return null;
        if (!comments.length) return <i>no comments yet</i>;

        return <ul>{comments.map(item => <li key={item.id}><Comment {...item} /></li>)}</ul>
    }

    toggleOpen = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

CommentList.defaultProps = {
    comments: []
};

export default CommentList;