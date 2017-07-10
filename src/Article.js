import React, {Component} from 'react'
import ArticleComments from './ArticlesComment'
import ArticleComments2 from './ArticlesComment2'

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            commentOpen:false
        };

    }

    render() {
        const {article} = this.props;


        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {this.getBody()}
{/*
                <ArticleComments2 comments={this.props.article.comments}/>
*/}
                <button onClick={this.commentClick}>jop</button>
                {this.getComments()}
            </div>
        )

    }

    getBody() {
        if (!this.state.isOpen) return null;
        return <p>{this.props.article.text}</p>
    }

    getComments() {
        if (this.props.article.comments && this.props.article.comments.length && this.state.commentOpen) {
             return this.props.article.comments.map(comment =>  <p key={comment.id}>{comment.text}</p> )
        }
    }

    handleClick = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
    commentClick = (ev) => {
        ev.preventDefault();
        this.setState({
            commentOpen: !this.state.commentOpen
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