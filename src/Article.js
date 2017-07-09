import React, {Component} from 'react'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }
    /*
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

        return (
              <div>
                <p>{this.props.article.text}</p>
                <button>Show comments</button>
              </div>
            )
    }
    */

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
                        <button onClick = {this.handleClick}>Show comments</button>
                        {this.showComments()}
                      </div>

        return this.getBody(body);
    }

    showComments() {
        const comments = this.props.article.comments;
        let body;

        if(comments !== undefined) {

            body = comments.map(comment =>
                   <div className="comment" key={comment.id}>
                      <h4 className="comment__user">{comment.user}</h4>
                      <p className="comment__text">{comment.text}</p>
                   </div>
            );

        } else {
            body = <div>Comments field is empty</div>;
        }

        return this.getBody(body);
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
