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
        const {articles, deleteArticle, toggleOpenItem, openItemId} = this.props
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

const mapStateToProps = (state) => {
    const { filters }           = state
    const { selected, period }  = filters
    const selectedIds           = selected ? selected.map(selected => selected.value) : []
    const fromTimestamp         = period.from ? Date.parse(period.from) : null
    const toTimestamp           = period.to ? Date.parse(period.to) : null
    const articles              = state.articles.filter(article => {
        const articleTimestamp = Date.parse(article.date)  
        if (selectedIds.length > 0 && (fromTimestamp && toTimestamp)) {
            return selectedIds.includes(article.id) && (articleTimestamp > fromTimestamp && articleTimestamp < toTimestamp)
        }
        
        if (selectedIds.length > 0) {
            return selectedIds.includes(article.id)
        }

        if (fromTimestamp && toTimestamp) {
            return (articleTimestamp > fromTimestamp && articleTimestamp < toTimestamp)
        }
        
        return true;
    })
    return {
        articles
    }
}

export default connect(
    mapStateToProps,
    { deleteArticle }
)(accordion(ArticlesList))