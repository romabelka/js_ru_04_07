import React, {Component} from 'react'
import Comment from './Comment'

class CommnetsList extends Component {
    state = {
        isOpen: false
    };

    static defaultProps = {
      comments: []
    };

    render() {

        const {isOpen} = this.state;
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{isOpen ? 'close' : 'open'} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const { comments } = this.props;
        if (!comments || !comments.length) return <span> No comments yet</span>
        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment = {comment} /></li>)}
            </ul>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


}

export default CommnetsList;
