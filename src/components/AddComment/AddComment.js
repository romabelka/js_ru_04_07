/**
 * Created by seryozhatebe on 15.07.17.
 */
import React, { Component } from 'react'
import './AddComment.css'


class AddComment extends Component {


    state = {
        errorName: '',
        errorComment: '',

    };

    render() {
        return (
            <div>
                <input type = "text" maxLength="30" onChange = {this.handleNameChange} className={this.state.errorName} />
                <textarea maxLength="150" onChange = {this.handleCommentChange} className={this.state.errorComment} />
                <button>Отправить</button>
            </div>
        )
    }

    handleNameChange = ev => {
        if (ev.target.value.length < 10) {
            return this.setState({
                errorName: 'error'
            })
        }
        this.setState({
            errorName: ''
        });
    };

    handleCommentChange = ev => {
        if (ev.target.value.length < 30) {
            return this.setState({
                errorComment: 'error'
            })
        }
        this.setState({
            errorComment: ''
        });
    };
}

export default AddComment