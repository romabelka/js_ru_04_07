import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'

class App extends Component {
    static propTypes = {

    };

    render() {
        const {articles} = this.props
        return (
            <div>
                <UserForm />
                <ArticleList articles = {articles}/>
                <ArticlesChart articles = {articles}/>
            </div>
        )
    }
}

export default App