import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleOpenArticle from '../decorators/accordeon'

class ArticlesList extends Component {

    render() {
        const {articles, state, toggleOpenArticle} = this.props
        const articleElements = articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === state.openArticleId}
                    toggleOpen={toggleOpenArticle(article.id)}
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

export default toggleOpenArticle(ArticlesList)