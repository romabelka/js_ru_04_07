import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class CommentForm extends Component {
    static propTypes = {
    };

    state = {
        user: '',
        text: ''
    }

    validator = {
        user: {
            min: 10,
            max: 30
        },
        text: {
            min: 30,
            max: 150
        }
    }

    render() {
        const {user, text} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>username:</label>
                    <input type="text" name="user" value = {user}
                       onChange = {this.handleChange}
                       className = {this.getClassName('user')}
                    />
                </p>
                <p>
                    <label>text:</label>
                    <textarea name="text" value = {text} cols="30" rows="5"
                        onChange = {this.handleChange}
                        className = {this.getClassName('text')}
                    />
                </p>
            </form>
        )
    }

    getClassName = type => this.state[type].length && this.state[type].length < this.validator[type].min
            ? 'form-input__error' : ''

    handleSubmit = ev => {
        ev.preventDefault()
        this.setState({
            user: '',
            text: ''
        })
    }

    handleChange = ev => {
        const {name, value} = ev.target

        if (value.length > this.validator[name].max) return

        this.setState({
            [name]: value
        })
    }
}

export default CommentForm