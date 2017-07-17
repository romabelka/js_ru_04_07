import React from 'react';
import Input from '../Input';
import propTypes from 'prop-types';

class CommentForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Username: </label>
                    <Input
                        ref={this.setUsernameInput}
                        value={this.props.username}
                        validator={val => val.length >= 10}
                    />
                </div>
                <div>
                    <label>Comment: </label>
                    <Input
                        ref={this.setCommentInput}
                        value={this.props.comment}
                        validator={val => val.length >= 30}
                    />
                </div>
                <button type='submit'>Send</button>
            </form>
        );
    }

    onSubmit = event => {
        event.preventDefault();

        alert(`Username: ${this.usernameInput.getValue()}\nComment: ${this.commentInput.getValue()}`);
    }

    setUsernameInput = input => {
        this.usernameInput = input;
    }

    setCommentInput = input => {
        this.commentInput = input;
    }

    static defaultProps = {
        username: '',
        comment: ''
    }

    static propTypes = {
        username: propTypes.string,
        comment: propTypes.string
    }
}

export default CommentForm;
