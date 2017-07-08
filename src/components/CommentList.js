import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    render() {
        const buttonText = !this.state.isOpen ? 'Show' : 'Hide';
        return (
            <div className="comment-list">
                <a href="#" className="comment-list__link" onClick={this.toggleClickOpen}>{buttonText} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if(!this.state.isOpen) return null;

        const {comments} = this.props;

        if (!comments) return <h4 className="comment-list__no-text">No comments</h4>;

        const commentItems = comments.map(item => <li className="comment-list__item" key={item.id}><Comment comment={item}/></li>);

        return <ul className="comment-list__list">{commentItems}</ul>;
    }

    toggleClickOpen = (e) => {
        e.preventDefault();

        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList;