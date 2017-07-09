/**
 * Список комментов
 */
import React, {Component} from 'react';
import Comment from './Comment';

class CommentsList extends Component {
  constructor(props) {
    super(props);

    /**
     * Стейт - показаны или скрыты комментарии
     * @type {{isOpen: boolean}}
     */
    this.state = {
      isOpen: false
    }
  }

  render() {
    const {comments} = this.props;
    const commentElements = comments.map(comment => <li key={comment.id}><Comment comment ={comment}/></li>);

    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          {this.state.isOpen ? 'Hide comments' : 'Show comments'}
        </button>
        {this.getComments(commentElements)}
      </div>
    )
  }

  /**
   * Обработка клика по кнопке показ / скрытие комментов, изменение стейта
   * @param ev событие
   */
  handleClick = (ev) => {
    ev.preventDefault();
    this.setState(prevState => ({
      isOpen: !this.state.isOpen
    }));
  };

  /**
   * Формируем список комментов в зависимоси от стейта
   * @param commentElements массив комментариев
   * @returns {*}
   */
  getComments(commentElements) {
    if (!this.state.isOpen) return null;
    return <ul>{commentElements}</ul>
  }
}

export default CommentsList