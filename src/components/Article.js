import React, {Component} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired,
        accordion: PropTypes.bool
    };

    render() {
        const { article, accordion } = this.props;
        return (
            <div>
                <h3 onClick = {accordion}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article, isOpen } = this.props;
        if (!isOpen) return null;
        return (
            <div>
               <p>{article.text}</p>
                <CommentList comments = {article.comments}/>
            </div>
        )
    }
}

export default Article