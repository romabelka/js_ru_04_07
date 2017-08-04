import React, {Component} from 'react'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import {deleteArticle, loadAllArticles} from '../AC'
import {filteredArticlesSelector} from '../selectors'
import Loader from './Loader'
import {Link} from 'react-router-dom'

class ArticlesList extends Component {
    render() {
        const {articles, loading} = this.props
        if (loading) return <Loader />

        const articleElements = articles.map(article => (
            <li key = {article.id}>
                <Link to = {`/articles/${article.id}`}>{article.title}</Link>
            </li>
        ))
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    componentDidMount() {
        this.props.loadAllArticles()
    }
}

ArticlesList.propTypes = {
    //from connect
    deleteArticle: PropTypes.func.isRequired,
    loadAllArticles: PropTypes.func.isRequired,
    articles: PropTypes.array.isRequired,
    loading: PropTypes.bool,
}

export default connect(
    (state) => ({
        articles: filteredArticlesSelector(state),
        loading: state.articles.loading
    }),
    { deleteArticle, loadAllArticles }
)(ArticlesList)