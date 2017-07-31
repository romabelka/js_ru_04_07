import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordionOpen from '../decorators/accordionOpen'

class ArticlesList extends Component {

    render() {
        const {articles, openArticleId, toggleOpen} = this.props
        const articleElements = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id === openArticleId}
                    toggleOpen = {toggleOpen(article.id)}
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
    articles: PropTypes.array.isRequired,
    openArticleId: PropTypes.string,
    toggleOpen: PropTypes.func
}

export default accordionOpen(ArticlesList)