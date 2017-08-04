import React, { Component } from 'react'
import PropTypes from 'prop-types'
import App from './App'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

class Root extends Component {
    static propTypes = {
        store: PropTypes.object
    };

    render() {
        return (
            <Router>
                <Provider store = {this.props.store}>
                    <App />
                </Provider>
            </Router>
        )
    }
}

export default Root