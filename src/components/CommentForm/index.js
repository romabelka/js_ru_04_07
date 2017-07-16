import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css'

class CommentForm extends Component {
    state = {
        isValidUsername: true,
        isValidComment: true
    }

    render() {
        return (
            <form>
                Username:<br/>
                <input type="text" name="username" maxLength="30"
                       className={this.state.isValidUsername ? 'username-valid' : 'username-invalid'}
                       onChange={this.handleUsernameChange}>
                </input><br/>
                Comment:<br/>
                <textarea name="comment" maxLength="150"
                          className={this.state.isValidComment ? 'comment-valid' : 'comment-invalid'}
                          onChange={this.handleCommentChange}>
                </textarea><br/>
                <button type="button">Submit</button>
            </form>
        );
    }

    handleUsernameChange = (e) => {
        if ((this.state.isValidUsername && e.target.value.length > 10) ||
            (!this.state.isValidUsername && e.target.value.length <= 10)) {
            this.setState({
                isValidUsername: !this.state.isValidUsername
            })
        }
    }

    handleCommentChange = (e) => {
        if ((this.state.isValidComment && e.target.value.length > 30) ||
            (!this.state.isValidComment && e.target.value.length <= 30)) {
            this.setState({
                isValidComment: !this.state.isValidComment
            })
        }

    }
}

CommentForm.propTypes = {};
CommentForm.defaultProps = {};

export default CommentForm;
