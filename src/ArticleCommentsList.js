import React, {Component} from 'react'
import ArticleComment from './ArticleComment'

class ArticleCommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComments: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({showComments: !this.state.showComments})
    }
    getComments() {
        const {comments} = this.props;
        return (
            comments.map(comment => 
                <ArticleComment 
                    key={comment.id}
                    user={comment.user}
                    text={comment.text}
                />
            )
        )
    }
    render() {
        const {comments} = this.props;
        return(
            <div>
                <button onClick={this.handleClick } style={{margin: '10px 0'}}>
                    {this.state.showComments ? 'Hide comments' : 'Show comments'}
                </button>
                <ol>
                    {this.state.showComments ? this.getComments() : null}
                </ol>
            </div>
        );
    }
}


export default ArticleCommentsList;