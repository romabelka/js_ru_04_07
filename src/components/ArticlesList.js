import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordionOpen from '../decorators/accordionOpen'

class ArticlesList extends Component {

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

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default accordionOpen(ArticlesList)