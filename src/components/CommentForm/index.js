import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { addComment } from '../../AC/index'
import './style.css'

class CommentForm extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getClassName = this.getClassName.bind(this);
    }

    static propTypes = {
    };

    state = {
        user: '',
        text: '',
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
        ev.preventDefault()

        if( this.state.user && this.state.text) {
            const { user, text } = this.state;
            const {idArticle} = this.props;
            
            this.props.addComment({user, text, idArticle});
            this.setState({
                user: '',
                text: '',
                isValidate: false
            })
        } else {
            alert ('Заполните все поля!');
        }
    }

    getClassName = type => {
        const isValidate = this.state[type].length && this.state[type].length < limits[type].min;

        return isValidate ? 'form-input__error' : ''
    }

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

const mapDispatchToProps = {
    addComment
}

export default connect(null, mapDispatchToProps)(CommentForm)