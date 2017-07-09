import React, {Component} from 'react'

class CommentsList extends Component {
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
                <button onClick = {this.handleClick}>{!this.state.isOpen ? "Show comments" : "Hide comments"}</button>
                {this.showComments()}
            </div>
        )
    }

    getBody(body) {
        if (!this.state.isOpen) return null;

        return body;
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
            body = <p>Comments field is empty</p>;
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

export default CommentsList
