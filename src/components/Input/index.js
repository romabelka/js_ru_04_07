import React from 'react';
import propTypes from 'prop-types';
import './style.css';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };
    }

    render() {
        return <input
            type='text'
            value={this.state.value}
            onChange={this.onChange}
            className={this.state.invalidValue ? 'error' : null}
        />;
    }

    getValue() {
        return this.state.value;
    }

    onChange = event => {
        const value = event.target.value;

        this.setState({
            value: value,
            invalidValue: !this.props.validator(value)
        });
    }

    static defaultProps = {
        validator: function() {}
    }

    static propTypes = {
        value: propTypes.string,
        validator: propTypes.func
    }
}

export default Input;
