import React, {Component} from 'react'
import CommentsList from './CommentsList'


class Article extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    handleClick = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return (
            <div>
                {this.getTitle()}
                {this.getBody()}
                {this.getComments()}
            </div>
        )
    }

    getTitle() {
        return <h3 onClick = {this.handleClick}>{this.props.article.title}</h3>
    }

    getBody() {
        if (!this.state.isOpen) return null;

        return <p>{this.props.article.text}</p>
    }

    getComments() {
        if (!this.state.isOpen) return null;

        return <CommentsList comments = {this.props.article.comments} />
    }
}


export default Article