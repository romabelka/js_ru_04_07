/**
 * Created by oem on 7/23/17.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.css'

class ConnectForm extends Component {
    static propTypes = {};

    state = {
        user: '',
        text: ''
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                user: <input type="text" value={this.state.user}
                             onChange={this.handleChange('user')}
                             className={this.getClassName('user')}/>
                text: <input type="text" value={this.state.text}
                             onChange={this.handleChange('text')}
                             className={this.getClassName('text')}/>
                <input type="submit" value="submit"/>
            </form>
        )
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.setState({
            user: '',
            text: ''
        })
    };

    getClassName = type => {
        console.log(this.state[type].length < limits[type].min);
        this.state[type].length && this.state[type].length < limits[type].min ? 'form-input__error' : ''
    }

    handleChange = (type) => (ev) =>{
        const {value} = ev.target;

        if (value.length > limits[type].max) return false
        this.setState({
            [type]: value
        })

    };
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

export default ConnectForm
