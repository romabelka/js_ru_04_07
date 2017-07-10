import React, {Component} from 'react'
import Comment from './Comment'

class CommentsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <div>
                <h3>Комментарии к статье ( <a onClick = {this.toggleComments} href="#">{(this.state.isOpen) ? 'Показать' : 'Скрыть'}</a> )</h3>
                {this.getComments()}
            </div>
        )
    }

    getComments() {
        if (!this.state.isOpen) return;

        const commentElements = this.props.comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>);
        return <ul>{commentElements}</ul>
    }

    toggleComments = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


export default CommentsList