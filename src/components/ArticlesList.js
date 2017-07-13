import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleOpenArticle from '../decorators/toggleOpenArticle'

class ArticlesList extends Component {

  static propTypes = {
      articles: PropTypes.array.isRequired
  }

    render() {
        const {articles, openArticleId, toggleOpenArticle} = this.props
        const articleElements = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id === openArticleId}
                    toggleOpen = {toggleOpenArticle(article.id)}
                />
            </li>
        ))
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }


}



export default toggleOpenArticle(ArticlesList)
