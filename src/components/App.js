import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Counter from './Counter'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <Counter />
                <UserForm />
                <ArticleList />
            </div>
        )
    }
}

export default App