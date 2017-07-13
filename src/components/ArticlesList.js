import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleOpenArticle from '../decorators/toggleOpenArticle'


class ArticlesList extends Component {
    static propTypes = {
              article: PropTypes.shape({
              title: PropTypes.string.isRequired,
              text: PropTypes.string,
              comments: PropTypes.array,
              id: PropTypes.number.isRequired
           }).isRequired,
           defaultOpen: PropTypes.bool
    }
    
    render() {
        const {articles} = this.props

        const {openArticleId, toggleOpenArticle} = this.props
        const articleElements = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id === openArticleId}
                    toggleOpen = {toggleOpenArticle(article.id)}/>
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

export default toggleOpenArticle (ArticlesList)