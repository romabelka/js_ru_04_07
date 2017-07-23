import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article'
import Filters from './Filters'

import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import {FILTER_APRIL, FILTER_MAY, FILTER_JUNE, FILTER_ALL} from '../constants';

import {deleteArticle, filterApril, filterMay, filterJune, filterAll, filterData, setFilter} from '../AC'

class ArticlesList extends Component {
    articleRefs = []

    render() {
        const {articles, deleteArticle, toggleOpenItem, openItemId, filters} = this.props;

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
            <div>
                <h3>Фильтры</h3>
                <Filters value={filters}
                         handleChangeSelect={this.handleChangeSelect}
                         handleChangeDate={this.handleChangeDate}/>
                <ul ref = {this.setContainerRef} >
                    {articleElements}
                </ul>
            </div>

        )
    }


    setArticleList = (filterValue) => {
        const { filterApril, filterMay, filterJune, filterAll, filterData } = this.props;
        switch (filterValue) {
            case FILTER_ALL:
                return filterAll();
            case FILTER_APRIL:
                return filterApril();
            case FILTER_MAY:
                return filterMay();
            case FILTER_JUNE:
                return filterJune();
            case FILTER_DATA:
                return filterData();
        }
    }

    handleChangeSelect = (selectedValue) => {
        const { setFilter } = this.props;
        setFilter(selectedValue.value);
        this.setArticleList(selectedValue.value);
    }

    handleChangeDate = (value) => {
        const { filterData } = this.props;
        filterData(value.from, value.to);
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
    filterApril: PropTypes.func.isRequired,
    filterMay: PropTypes.func.isRequired,
    filterJune: PropTypes.func.isRequired,
    filterAll: PropTypes.func.isRequired,
    filterData: PropTypes.func.isRequired,
    articles: PropTypes.array.isRequired,
    //from accordion decorator
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
}

export default connect(
    ({ articles, filters }) => ({ articles, filters }),
    { deleteArticle, filterAll, filterApril, filterMay, filterJune, filterData, setFilter }
)(accordion(ArticlesList))