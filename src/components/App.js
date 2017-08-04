import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
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

                <Route path = "/articles" component = {ArticleList} />
                <Route path = "/counter" component = {Counter} />
                <Route path = "/filters" component = {Filters} />
            </div>
        )
    }
}

export default App