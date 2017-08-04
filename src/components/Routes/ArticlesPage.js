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
                <Route path = "/articles/:id" render = {this.getArticlePage}/>
            </div>
        )
    }

    getArticlePage = ({ match }) => {
        return <Article id = {match.params.id} isOpen />
    }
}

export default ArticlesPage