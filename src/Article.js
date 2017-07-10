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
                {this.getBody()}
                {this.getComments()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        return <p>{this.props.article.text}</p>
    }

    getComments() {
        const { article } = this.props
        if ( !article.comments ) return null
        return <p><CommentList comments = {article.comments}/></p>
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article