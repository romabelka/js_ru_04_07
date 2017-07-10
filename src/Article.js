import React, {Component} from 'react';
import CommentsList from './CommentsList';

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            buttonIsOpen: false,
            buttonText: "Open comments"
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

        return (
          <div>
              <p>{this.props.article.text}</p>
              <button onClick = {this.handleButtonClick}>{this.state.buttonText}</button>
              {this.getComments()}
          </div>
        )
    }
    getComments() {
        if (!this.state.buttonIsOpen) return null

        return (
          <div>
              <CommentsList comments = {this.props.article.comments}/>
          </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    handleButtonClick = (ev) => {
      this.setState({
          buttonIsOpen: !this.state.buttonIsOpen
      })
      if(!this.state.buttonIsOpen) {
        this.setState({
            buttonText: "Close comments"
        })
      } else {
        this.setState({
            buttonText: "Open comments"
        })
      }

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
