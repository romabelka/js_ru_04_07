import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordeon from '../decorators/accordeon'

class ArticlesList extends Component {
    render() {
        const {articles, itemId, toggleItem} = this.props
        const articleElements = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id === itemId}
                    toggleOpen = {toggleItem(article.id)}
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
    articles: PropTypes.arrayOf(Article.propTypes.article),
    itemId: PropTypes.any,
    toggleItem: PropTypes.func.isRequired
}

export default accordeon(ArticlesList)