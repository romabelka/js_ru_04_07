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
        return (
            <div>
                { this.getButton() }
                { this.getComments() }
            </div>
        )
    }

    getButton() {
        if (!this.props.comments) return <i>no comments</i>;
        return <button onClick={this.handleClick}>{this.state.isOpen ? "Hide comments" : "Show comments"}</button>
    }

    getComments() {
        if (!this.state.isOpen) return null;

        const { comments = [] } = this.props;

        return <ul>{comments.map(item => <Comment comment={item} key={item.id} />)}</ul>
    }

    handleClick = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList;