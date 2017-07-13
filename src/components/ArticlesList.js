import React, {Component} from 'react'
import Article from './Article'
import accordeon from '../decorators/accordeon'
import PropTypes from 'prop-types'


class ArticlesList extends Component {


    render() {
        const {articles, state, toggleOpenArticle} = this.props;
        console.log(this.props);
        const articleElements = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id === state}
                    accordeon = {toggleOpenArticle(article.id)}
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
    state: PropTypes.bool.isRequired,
    toggleOpenArticle: PropTypes.func.isRequired
};

export default accordeon(ArticlesList)