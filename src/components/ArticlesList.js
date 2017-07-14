import React from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleOpenItem from '../decorators/toggleOpenItem'

const ArticlesList = ({articles, openItemId, toggleOpenItem}) => {
    const articleElements = articles.map(article => (
        <li key = {article.id}>
            <Article
                article = {article}
                isOpenArticle = {article.id === openItemId}
                toggleOpenArticle = {toggleOpenItem(article.id)}
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
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
};

export default toggleOpenItem(ArticlesList)