import React from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import AccordeonComponent from '../decorators/accordeon'

function ArticlesList(props) {

   const {articles, currentItemId, toggleItem} = props
   const articleElements = articles.map(article => (
       <li key = {article.id}>
           <Article
               article = {article}
               isOpen = {article.id === currentItemId}
               toggleOpen = {toggleItem(article.id)}
           />
       </li>
   ))
   return (
       <ul>
           {articleElements}
       </ul>)
}

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired,
    currentItemId: PropTypes.string.isRequired,
    toggleItem: PropTypes.func.isRequired
}

export default AccordeonComponent(ArticlesList)