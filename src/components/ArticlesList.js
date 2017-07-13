import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import Accordion from '../decorators/accordion'

function ArticlesList(props) {
    const {articles, openId, toggleOpen} = props,
        articleElements = articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openId}
                    toggleOpen={toggleOpen(article.id)}
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