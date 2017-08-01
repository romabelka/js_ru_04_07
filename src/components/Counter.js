import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number,
        increment: PropTypes.func
    };

    render() {
        const {count, increment} = this.props
        return (
            <div>
                <h1>{count}</h1>
                <button onClick = {increment}>increment me</button>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        count: state.counter
    }
}, { increment })(Counter)