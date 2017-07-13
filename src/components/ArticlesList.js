import React from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleOpenArticle from '../decorators/toggleOpenArticle'

const ArticlesList = ({articles, openArticleId, toggleOpenArticle}) => {
    const articleElements = articles.map(article => (
        <li key = {article.id}>
            <Article
                article = {article}
                isOpenArticle = {article.id === openArticleId}
                toggleOpenArticle = {toggleOpenArticle(article.id)}
            />
        </li>
    ));

    return <ul>{articleElements}</ul>
};

ArticlesList.defaultProps = {
    articles: []
};
ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired,
    openArticleId: PropTypes.string,
    toggleOpenArticle: PropTypes.func.isRequired
};

export default toggleOpenArticle(ArticlesList)