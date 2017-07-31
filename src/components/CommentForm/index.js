import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import {addComment} from '../../AC'
import {connect} from 'react-redux'


class CommentForm extends Component {
    static propTypes = {
      articleId: PropTypes.string.isRequired
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
       const { articleId } = this.props
        ev.preventDefault()
      this.props.addComment({
        id: null,
        user: this.state.user,
        text: this.state.text,
        articleId
      })
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
