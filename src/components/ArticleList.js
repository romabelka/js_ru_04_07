import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import {deleteArticle} from '../AC'

class ArticlesList extends Component {
    articleRefs = [];

    filterSelect(articles, selectsArticle) {
        let filteringArticles = [];

        if (Array.isArray(selectsArticle) && Array.isArray(articles)) {
            articles.forEach( article => {
                for (let i = 0, length = selectsArticle.length; i < length; i++ ) {
                    const id = selectsArticle[i].value;

                    if (id === article.id) {
                        filteringArticles.push(article);

                        break;
                    }
                }
            });

            return filteringArticles;
        }

        return articles;
    }

    filterDate(articles, datesArticles) {
        const { from, to } = datesArticles;
        let result = [];

        if (!(from && to) || !Array.isArray(articles)) return articles;

        const fromM = new Date(datesArticles.from).getTime();
        const toM = new Date(datesArticles.to).getTime();

        articles.forEach( article => {
            const dateArticleM = new Date(article.date).getTime();

            if (dateArticleM >= fromM && dateArticleM <= toM) {
                result.push(article);
            }
        })

        return result;
    }

    render() {
        const {articles, filters, deleteArticle, toggleOpenItem, openItemId} = this.props;
        const { select, dateRange } = filters;
        let filteringArticles = [];
        let result = [];

        filteringArticles = this.filterSelect(articles, select);

        result = this.filterDate(filteringArticles, dateRange);

        const articleElements = result.map(article => (
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

const mapStateToProps = state => {
    return {
        articles: state.articles,
        filters: state.filters
    }
}

export default connect(
    mapStateToProps,
    { deleteArticle }
)(accordion(ArticlesList))