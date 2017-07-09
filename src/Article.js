/**
 * Компонент Статья
 */
import React, {Component} from 'react';
import CommentsList from './CommentsList';

class Article extends Component {
  constructor(props) {
    super(props);

    /**
     * Стейт - показана или скрыта статья
     * @type {{isOpen: boolean}}
     */
    this.state = {
      isOpen: false
    }
  }

  render() {
    const {article} = this.props;
    return (
      <div>
        <h3 onClick={this.handleClick}>{article.title}</h3>
        {this.getBody()}
      </div>
    )
  }

  /**
   * Формируем содержимое статьи в зависимости от стейта
   * @returns {Element}
   */
  getBody() {
    if (!this.state.isOpen) return null;
    return <div><p>{this.props.article.text}</p>{this.getComments()}</div>
  }

  /**
   * Формируем список комментов
   * @returns {Component}
   */
  getComments() {
    if (this.props.article.comments) {
      return <CommentsList comments={this.props.article.comments} />;
    }
  }
  /**
   * Обработка клика по кнопке показ / скрытие статьи, изменение стейта
   * @param ev событие
   */
  handleClick = (ev) => {
    ev.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default Article