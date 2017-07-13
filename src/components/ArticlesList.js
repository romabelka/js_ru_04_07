import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordeon from '../decorators/accordeon';

function ArticlesList({ articles, openChildId, toggleOpen }) {
  const articleElements = articles.map(article => (
      <li key = {article.id}>
          <Article
              article = {article}
              isOpen = {article.id === openChildId}
              toggleOpen = {toggleOpen(article.id)}
          />
      </li>
  ))
  return (
      <ul>
          {articleElements}
      </ul>
  );
}

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default accordeon(ArticlesList);
