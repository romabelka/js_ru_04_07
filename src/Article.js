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
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        return <div>
            <p>{this.props.article.text}</p>
            {this.getComments(this.props.article.comments)}
        </div>

    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getComments() {

        if (this.props.article.comments) {
            return <CommentsList comments={this.props.article.comments}/>
        }

        return null
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