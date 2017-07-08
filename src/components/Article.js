import React, {Component} from 'react';
import CommentList from './CommentList'


class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    render() {
        const { article } = this.props;

        return (
            <div className="article">
                <h3 className="article__title" onClick = {this.handleClick}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;

        const {text, comments} = this.props.article;
        return (
            <div className="article__body">
                <p className="article__text">{text}</p>
                <CommentList comments={comments}/>
            </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article;