import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticlesPage from './Routes/ArticlesPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import { Route } from 'react-router-dom'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <UserForm />

                <Route path = "/articles" component = {ArticlesPage} />
                <Route path = "/counter" component = {Counter} />
                <Route path = "/filters" component = {Filters} />
            </div>
        )
    }
}

export default App