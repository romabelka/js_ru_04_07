import React, {Component} from 'react';
import Article from './Article/index';
import accordion from '../decorators/accordion';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom'

class ArticlesList extends Component {
    articleRefs = [];

    render() {
        // console.log(this.props.ref);
        const {articles, toggleOpenItem, openItemId} = this.props;
        const articleElements = articles.map(article => (
                <li key={article.id}>
                    <Article
                        ref = {this.setArticleRef}
                        article={article}
                        isOpen={article.id === openItemId}
                        toggleOpen={toggleOpenItem(article.id)}
                    />
                </li>
            )
        );
        return (
            <ul ref = {this.setContainerRef}>
                {articleElements}
            </ul>
        )
    }

    setContainerRef = (container) => {
        this.container = container;
        console.log('container', container);
    };

    setArticleRef = (articleRef) => {
        this.articleRefs.push(articleRef);
        console.log(this.articleRefs);
    };

    componentDidMount() {
        console.log('----------', this.articleRefs);
        console.log('-----own node', findDOMNode(this));
        console.log('--------nodes:', this.articleRefs.map(findDOMNode));
    }
}

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired,
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
};

export default accordion(ArticlesList);
