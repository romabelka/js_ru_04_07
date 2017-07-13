import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import Accordion from '../decorators/accordion'

function ArticlesList (props) {
    const {articles, openArticleId} = props;
    const articleElements = articles.map(article => (
        <li key = {article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openArticleId}
                toggleOpen = {props.toggleArticleId(article.id)}
            />
        </li>
    ));
    return (
        <ul>
            {articleElements}
        </ul>
    )
}

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default Accordion(ArticlesList)