import React, {Component} from 'react'
import CommentList from './CommentList'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            isVisibleComments: false
        }
    }

    render() {
        const { article } = this.props;

        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                <button onClick = {this.handleCommentsButtonClick}>{this.state.isVisibleComments ? 'Hide' : 'Show'}</button>
                {this.getBody()}
                {this.getCommentList()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;

        return <p>{this.props.article.text}</p>
    }

    getCommentList() {
        if (!this.state.isVisibleComments) return null;

        return <CommentList comments = {this.props.article.comments}/>
    }

    handleClick = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleCommentsButtonClick = () => {
        this.setState({
            isVisibleComments: !this.state.isVisibleComments
        })
    }
}

export default Article