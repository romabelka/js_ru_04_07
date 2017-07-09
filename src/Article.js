import React, {Component} from 'react'
import CommentsList from './CommentsList'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        const { article } = this.props
        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {this.showArticle()}
            </div>
        )
    }

    getBody(body) {
        if (!this.state.isOpen) return null;

        return body;
    }

    showArticle() {
        const body =  <div>
                        <p>{this.props.article.text}</p>
                        <CommentsList article = {this.props.article} />
                      </div>

        return this.getBody(body);
    }

    handleClick = (ev) => {
        ev.preventDefault()

        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article
