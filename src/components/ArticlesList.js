import React from 'react'
import Article from './Article'
import PropTypes from 'prop-types'

function ArticleList({ articles }) {
    const articleElements = articles.map(article => <li key = {article.id}><Article article = {article} /></li>)
    return (
        <ul>
            {articleElements}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleList