import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    state = {
        isOpen: false
    }

    static defaultProps = {
        comments: []
    }

    componentWillMount() {
        console.log('---', 'mounting', this.props.comments.length)
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('---', this.state.isOpen, 'next ', nextState.isOpen)
    }

    render() {
        const { isOpen } = this.state
        return (
            <div>
                <button onClick = {this.toggleOpen}>{isOpen ? 'hide' : 'show'} comments</button>
                {this.getBody()}
            </div>
        )
    }

    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('---', 'prev', prevState.isOpen)
    }

    componentWillUnmount() {
        console.log('---', 'unmounting')
    }

    getBody() {
        if (!this.state.isOpen) return null
        const { comments } = this.props
        if (!comments.length) return <h3>No comments yet</h3>
        return (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
            </ul>
        )
    }

    toggleOpen = () => this.setState({
        isOpen: !this.state.isOpen
    })
}

export default CommentList