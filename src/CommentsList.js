import React, {Component} from 'react'
import Comment from './Comment'

class CommentsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        if (this.props.comments) {
            return (
                <div>
                    {this.getButton()}
                    <ol>
                        {this.getBody()}
                    </ol>
                </div>
            )
        } else {
            return null
        }
    }

    getButton() {
        let buttonTitle = `Hide comments (${this.props.comments.length})`;

        if (!this.state.isOpen) {
            buttonTitle = `Show comments (${this.props.comments.length})`
        }

        return <button onClick={this.handleClick}>{buttonTitle}</button>
    }

    getBody() {
        if (!this.state.isOpen) return null

        const {comments} = this.props

        return comments.map(comment => <li key={comment.id}><Comment comment={ comment }/></li>)

    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}

export default CommentsList