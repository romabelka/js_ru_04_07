import React, {Component} from 'react';
import CommnetsList from './CommnetsList';

class Article extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      isComments: false
    }

  }
  render() {
    const { article } = this.props;
    return (
          <div>
            <h3 onClick = {this.handleClick}>{ article.title }</h3>
            { this.getBody() }

          </div>
    )
  }

  getBody(){

    if (!this.state.isOpen) return null

    return (
      <div>
        <p>{ this.props.article.text }</p>
        <a href="#" onClick = {this.checkedStateComments}>{ this.getTextBtn() }</a>
        { this.getCommentsList() }
      </div>
    )
  }

  getCommentsList(){
    if (!this.state.isComments) return false

    return <CommnetsList comments={this.props.article.comments} />
  }

  getTextBtn(){
    if (!this.state.isComments) return 'Open'

    return 'Close'
  }

  handleClick = (ev) => {
    ev.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  checkedStateComments = (ev) => {
    ev.preventDefault();
    this.setState({
      isComments: !this.state.isComments
    })
  }
}

// function Article(props) {
//   const { article } = props;
//   return (
//     <div>
//       <h3>{ article.title }</h3>
//       <p>{ article.text }</p>
//     </div>
//   )
// }

export default Article;
