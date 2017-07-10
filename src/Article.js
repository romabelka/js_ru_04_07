import React, {Component} from 'react';
import ArticleComments from './ArticleComments';

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            isCommentsShow: false
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
          <button onClick = {this.handleCommentButtonClick}>
            {`${this.state.isCommentsShow ? 'Скрыть' : 'Показать'} комментарии`}
          </button>
          {this.state.isCommentsShow &&
            <ArticleComments comments={this.props.article.comments} />}
        </div>
    }
    getComments() {
      if (!this.state.isCommentsShow) return null;
      const { comments } = this.props.article;

    }
    handleCommentButtonClick = (e) => {
      e.preventDefault();
      this.setState({
        isCommentsShow: !this.state.isCommentsShow
      });
    }
    handleClick = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen,
            isCommentsShow: false
        });
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
