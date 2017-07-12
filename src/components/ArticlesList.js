import React, {Component} from 'react';
import Article from './Article';
import toggleComment from '../decorators/toggleComment';
import PropTypes from 'prop-types';

class ArticlesList extends Component {
    render() {
        const {articles, openArticleId, toggleOpenArticle} = this.props;

        const articleElements = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id === openArticleId}
                    toggleOpen = {toggleOpenArticle(article.id)}
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
    articles: PropTypes.array.isRequired,
    openArticleId: PropTypes.string,
    toggleOpenArticle: PropTypes.func.isRequired
};

export default toggleComment(ArticlesList)