import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentForm extends Component {
    static propTypes = {
        usernameLength: PropTypes.array,
        commentLength: PropTypes.array
    }

    static defaultProps = {
        usernameLength: [10,30],
        commentLength: [30,150]
    }

    state = {
        username: '',
        commentText: '',
    }

    render() {
        return (
            <div>
                Name:<input type = "text"
                            id = "username"
                            value = {this.state.username}
                            onChange = {this.handleChange}
                        />
                <br/>
                Text:<textarea rows="4"
                               cols="45"
                               id = "commentText"
                               name="text"
                               value = {this.state.commentText}
                               onChange = {this.handleChange}
                    />
                <br/>
                <button>Send</button>
            </div>
        )
    }

    handleChange = ev => {
        const   elemId = ev.target.id,
                elemLength = ev.target.value.length

        if ((elemId === "username" && elemLength > this.props.usernameLength[1]) ||
            (elemId === "commentText" && elemLength > this.props.commentLength[1])) {
            return
        }

        ev.target.style.borderColor = this.validation(elemId, elemLength)

        if (elemId === "username") {
            this.setState({
                username: ev.target.value
            })
        } else if (elemId === "commentText"){
            this.setState({
                commentText: ev.target.value
            })
        }
    }

    validation = (elemId, elemLength) => {
        let borderColor = "initial"
        if (elemId === "username") {
            elemLength < this.props.usernameLength[0] ? borderColor = 'red' : borderColor = 'initial'
        } else if (elemId === "commentText") {
            elemLength < this.props.commentLength[0] ? borderColor = 'red' : borderColor = 'initial'
        }
        return borderColor
    }
}

export default CommentForm