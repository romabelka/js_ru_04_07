import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from '../ArticleList'
import { Route } from 'react-router-dom'
import Article from '../Article'

class ArticlesPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h3>Articles Page:</h3>
                <ArticleList />
                <Route path = "/articles/:id" children = {this.getArticlePage}/>
            </div>
        )
    }

    getArticlePage = ({ match }) => {
        if (!match) return <h2>Please select article</h2>
        return <Article id = {match.params.id} key = {match.params.id} isOpen />
    }
}

export default ArticlesPage
