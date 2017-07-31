import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import {connect} from 'react-redux'
import {addComment} from '../../AC'

class CommentForm extends Component {
    static propTypes = {
        // ownProps
        articleId: PropTypes.string.isRequired,
        // storeProps
        addComment: PropTypes.func.isRequired
    };

    state = {
        user: '',
        text: ''
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                user: <input value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                comment: <input value = {this.state.text}
                                onChange = {this.handleChange('text')}
                                className = {this.getClassName('text')} />
                <input type = "submit" value = "submit"/>
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault();
        const { user, text } = this.state;
        const { articleId, addComment } = this.props;
        if (
            ( user.length > limits.user.min && user.length < limits.user.max ) &&
            ( text.length > limits.text.min && text.length < limits.text.max )
        ) {
            addComment({user, text}, articleId);
            this.setState({
                user: '',
                text: ''
            })
        }
    }

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min
        ? 'form-input__error' : ''

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
    }
}

const limits = {
    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 50
    }
}

export default connect(null, { addComment })(CommentForm)