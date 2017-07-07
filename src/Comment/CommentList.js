import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        }
    }

    render() {

        const list = this.props.comments.map(
            comment =>
                <Comment key={comment.id} comment={comment}/>
        )

        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.getBtnText()}
                </button>

                {this.state.isOpen ? list : null}
            </div>
        )
    }

    getBtnText() {
        return this.state.isOpen
            ? 'close all comments'
            : 'show all comments'
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList