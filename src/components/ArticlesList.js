import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'

class ArticlesList extends Component {
    state = {
        openArticleId: null
    }

    render() {
        const {articles} = this.props
        const articleElements = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id === this.state.openArticleId}
                    toggleOpen = {this.toggleOpenArticle(article.id)}
                />
            </li>
        ))
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    toggleOpenArticle = openArticleId => () => this.setState({ openArticleId })
}

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticlesList