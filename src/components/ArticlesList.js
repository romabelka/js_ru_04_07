import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleOpenArticle from '../decorators/toggleOpenArticle'

function ArticlesList(props) {
   
    const {articles, toggleOpenArticle, openArticleId} = props
    const articleElements = articles.map(article => (
        <li key = {article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openArticleId}
                toggleOpen = {toggleOpenArticle(article.id)}
                
            />
        </li>
    ))
    return (
        <ul>
            {articleElements}
        </ul>
    )
}

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default toggleOpenArticle(ArticlesList)