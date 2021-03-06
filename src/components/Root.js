import React, { Component } from 'react'
import PropTypes from 'prop-types'
import App from './App'
import {Provider} from 'react-redux'
import {ConnectedRouter as Router} from 'react-router-redux'
import history from '../history'

class Root extends Component {
    static propTypes = {
        store: PropTypes.object
    };

    render() {
        return (
            <Provider store = {this.props.store}>
                <Router history = {history}>
                    <App />
                </Router>
            </Provider>
        )
    }
}

export default Root