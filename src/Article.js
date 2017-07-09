import React, {Component} from 'react'
import Comments from "./Comments";

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
                <Comments comments={article.comments}/>
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        return <p>{this.props.article.text}</p>
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
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