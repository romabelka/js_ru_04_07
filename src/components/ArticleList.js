import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import {deleteArticle} from '../AC'
import {filteredArticlesSelector} from '../selectors'

class ArticlesList extends Component {
    articleRefs = []

    render() {
        const {articles, deleteArticle, toggleOpenItem, openItemId} = this.props
        console.log('---', 'rerendering ArticleList')
        const articleElements = articles.map(article => (
            <li key = {article.id}>
                <Article
                    ref = {this.setArticleRef}
                    article = {article}
                    isOpen = {article.id === openItemId}
                    toggleOpen = {toggleOpenItem(article.id)}
                    handleDelete = {deleteArticle}
                />
            </li>
        ))
        return (
            <ul ref = {this.setContainerRef} >
                {articleElements}
            </ul>
        )
    }

    setContainerRef = (container) => {
        this.container = container
        console.log('---', container)
    }

    setArticleRef = (articleRef) => {
        this.articleRefs.push(articleRef)
    }

    componentDidMount() {
        console.log('---', this.articleRefs)
        console.log('---', 'own node: ', findDOMNode(this))
        console.log('---', 'nodes: ', this.articleRefs.map(findDOMNode))
    }
}

ArticlesList.propTypes = {
    //from connect
    deleteArticle: PropTypes.func.isRequired,
    articles: PropTypes.array.isRequired,
    //from accordion decorator
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
}

export default connect(
    (state) => ({
        articles: filteredArticlesSelector(state)
    }),
    { deleteArticle }
)(accordion(ArticlesList))