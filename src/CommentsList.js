import React, {Component} from 'react'
import Comment from './Comment'

class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    getComments() {
        return this.props.comments.map( ({id, user, text}) => <Comment key={id} user={user} text={text}/> )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <button onClick = {this.handleClick}> {this.state.isOpen ? 'Hide comments' : 'Show comments'} </button>
                {this.state.isOpen ? <ul> {this.getComments()} </ul> : null}
            </div>
        )
    }
}

export default CommentsList