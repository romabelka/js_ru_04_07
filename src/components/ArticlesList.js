import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import Accordion from '../decorators/accordion'

function ArticlesList(props) {
    const articleElements = props.articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === props.openId}
                    toggleOpen={props.toggleOpen(article.id)}
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
    openId: PropTypes.string,
    toggleOpen: PropTypes.func.isRequired
};

export default Accordion(ArticlesList)