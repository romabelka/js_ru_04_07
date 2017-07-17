import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class CommentListForm extends Component {
    static propTypes = {

    };

    state = {
        username: '',
        usernameValid: 'invalid',
        comment: '',
        commentValid: 'invalid'
    }

    render() {
        return (
            <div>
                <p>Username: <input className={this.state.usernameValid} type = "text" value = {this.state.username} onChange = {this.handleNameChange} /></p>
                <p>Comment: <textarea className={this.state.commentValid} name="comment" cols="40" rows="10" value = {this.state.comment} onChange = {this.handleCommentChange} /></p>
            </div>
        )
    }

    handleNameChange = ev => {
        ev.target.value.length > 10 ? this.setState({usernameValid: "valid"}) : this.setState({usernameValid: "invalid"})

        if (ev.target.value.length > 30) return

        this.setState({
            username: ev.target.value
        })
    }

    handleCommentChange = ev => {
        ev.target.value.length > 30 ? this.setState({commentValid: "valid"}) : this.setState({commentValid: "invalid"})

        if (ev.target.value.length > 150) return

        this.setState({
            comment: ev.target.value
        })
    }
}

export default CommentListForm