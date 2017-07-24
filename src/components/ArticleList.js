import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import {deleteArticle} from '../AC'

class ArticlesList extends Component {
    articleRefs = []

    render() {
        const {articles, deleteArticle, toggleOpenItem, openItemId, visibleIds, dateRangeFilter} = this.props
        const articleElements = articles.map(article => {
            const articleTime = Number(new Date(article.date))
            const needHide = visibleIds.length && !visibleIds.includes(article.id) ||
                dateRangeFilter && (articleTime < dateRangeFilter.from || articleTime > dateRangeFilter.to)

            return <li key = {article.id} style={{display: needHide ? 'none' : null}}>
                <Article
                    ref = {this.setArticleRef}
                    article = {article}
                    isOpen = {article.id === openItemId}
                    toggleOpen = {toggleOpenItem(article.id)}
                    handleDelete = {deleteArticle}
                />
            </li>
        })

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
    visibleIds: PropTypes.array,
    dateRangeFilter: PropTypes.object,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
}

export default connect(
    state => ({
        articles: state.articles,
        visibleIds: state.filters.ids,
        dateRangeFilter: state.filters.range
    }),
    { deleteArticle }
)(accordion(ArticlesList))
