import React, {Component} from 'react'
import CommentList from './CommentList'

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
                { this.getBody() }
                { this.getComments() }
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        return <p>{this.props.article.text}</p>
    }

    getComments() {
        return <CommentList comments={this.props.article.comments} />
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

/*
function Article(props) {
    const { article } = props
    return (
        <div>
            <h3>{article.title}</h3>
            <p>{article.text}</p>
        </div>
    )
}
*/

export default Article