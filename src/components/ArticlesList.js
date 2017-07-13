import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordeon from '../decorators/accordeon'

function ArticlesList(props) {
  const {openArticleId, toggleOpenArticle, articles} = props;

  const articleElements = articles.map(article => (
    <li key={article.id}>
      <Article
        article={article}
        isOpen={article.id === openArticleId}
        toggleOpen={toggleOpenArticle(article.id)}
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
  openArticleId: PropTypes.string.isRequired,
  toggleOpenArticle: PropTypes.func.isRequired
}

export default accordeon(ArticlesList)