import React, {Component} from 'react'
import CommentsList from './CommentsList'

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
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {this.getBody()}
                {(article.comments) ? <CommentsList comments = {article.comments} /> : false}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;

        return <p>{this.props.article.text}</p>
    }

    handleClick = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article