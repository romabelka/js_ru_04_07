import React from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'

const Article = (props) => {
    const { article, toggleOpenArticle } = props;

    return (
        <div>
            <h3 onClick = {toggleOpenArticle}>{article.title}</h3>
            <Body {...props}/>
        </div>
    )

};

const Body = ({ article, isOpenArticle }) => {
    if (!isOpenArticle) return null;

    return (
        <div>
            <p>{article.text}</p>
            <CommentList comments = {article.comments}/>
        </div>
    )
};


Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
        comments: PropTypes.array
    }).isRequired,
    isOpenArticle: PropTypes.bool.isRequired,
    toggleOpenArticle: PropTypes.func.isRequired
};

export default Article