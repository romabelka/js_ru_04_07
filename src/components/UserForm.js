import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
    static propTypes = {

    };

    state = {
        username: '',
        text: ''
    }

    validator = {
        username: {
            min: 10,
            max: 30
        },
        text: {
            min: 30,
            max: 150
        }
    }

    render() {
        const {username, text} = this.state
        return (
            <div>
                <p>
                    <label>username:</label>
                    <input type = "text" name = "username" value = {username} onChange = {this.handleChange} />
                </p>
                <p>
                    <label>text:</label>
                    <textarea name = "text" value = {text} onChange = {this.handleChange} cols = "30" rows = "5" />
                </p>
            </div>
        )
    }

    handleChange = ev => {
        const {name, value} = ev.target
        const validLength = this.validator[name]

        console.log(validLength + ' => ' + value.length)

        if (value.length > validLength.min) {
            ev.target.style.borderColor = "red"

            return this.setState({
                [name]: value.substr(0, validLength.max)
            })
        }

        ev.target.style.borderColor = ""

        return this.setState({
            [name]: value
        })
    }
}

export default UserForm