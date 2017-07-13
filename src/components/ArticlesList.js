import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import Accordion from '../decorators/accordion'

function ArticlesList(props) {

    const {articles, openArticleId, toggleOpen} = props;
    const articleElements = articles.map(article => (
        <li key = {article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openArticleId}
                toggleOpen = {toggleOpen(article.id)}
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
    articles: PropTypes.array.isRequired,
    openArticleId: PropTypes.number,
    toggleOpen: PropTypes.func
};

export default Accordion(ArticlesList)