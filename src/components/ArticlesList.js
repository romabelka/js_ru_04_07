import React, {Component} from 'react';
import Article from './Article';
import accordion from '../decorators/accordion';
import PropTypes from 'prop-types';

class ArticlesList extends Component {
    render() {
        const {articles, toggleOpenItem, openItemId} = this.props;
        const articleElements = articles.map(article => (
                <li key={article.id}>
                    <Article
                        article={article}
                        isOpen={article.id === openItemId}
                        toggleOpen={toggleOpenItem(article.id)}
                    />
                </li>
            )
        );
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired,
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
};

export default accordion(ArticlesList);
