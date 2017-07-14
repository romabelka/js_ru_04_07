import React from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'

function ArticlesList({articles, openedItemId:openedArticleId, toggleOpenItem:toggleOpenArticle}) {
    const articleElements = articles.map(article => {
        const isOpen = article.id === openedArticleId;

        return (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {isOpen}
                    toggleOpen = {toggleOpenArticle(isOpen ? null : article.id)}
                />
            </li>
        );
    });

    return <ul>{articleElements}</ul>;
}

ArticlesList.defaultProps = {
    toggleOpenItem: function() {}
}

ArticlesList.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    openedItemId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    toggleOpenItem: PropTypes.func
};

export default accordion(ArticlesList)
