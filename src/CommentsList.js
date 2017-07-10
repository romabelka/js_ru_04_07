import React, {Component} from 'react'
import Comment from './Comment'


// компонент сложный - пилим класс
class CommentsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    };

    handleClick = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return (
            <div>
                <h4>Комментарии:</h4>
                <button onClick = {this.handleClick}>
                    {!this.state.isOpen ? "Показать" : "Скрыть"}
                </button>
                {this.getComments()}
            </div>
        )
    }

    getComments() {
        if (!this.state.isOpen) return null;

        const { comments } = this.props,
            commentElements = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>);

       return <ul>{commentElements}</ul>
    }
}

export default CommentsList