import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from '../ArticleList'
import { Route } from 'react-router-dom'
import Article from '../Article'
import localization from '../../decorators/localization'

class ArticlesPage extends Component {
    static propTypes = {

    };

    render() {
        console.log('---', 2)
        return (
            <div>
                <h3>{this.props.dict.Articles_Page}:</h3>
                <ArticleList>
                    <Route path = "/articles/:id" children = {this.getArticlePage}/>
                </ArticleList>
            </div>
        )
    }

    getArticlePage = ({ match }) => {
        if (!match) return <h2>{this.props.dict.Pls_select_article}</h2>
        return <Article id = {match.params.id} key = {match.params.id} isOpen />
    }
}

export default localization(ArticlesPage)