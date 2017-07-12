import React, {Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';

class ArticlesList extends Component {
    render() {
        const {articles, isOpen, toggleOpen} = this.props;
        const articleElements = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id === isOpen}
                    toggleOpen = {toggleOpen(article.id)}
                />
            </li>
        ));
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default accordion(ArticlesList)