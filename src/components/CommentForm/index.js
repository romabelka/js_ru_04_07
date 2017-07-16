import React, { Component } from 'react'

class CommentForm extends Component {

    state = {
        username: '',
        commentText: '',
        usernameLength: [10,30],
        commentLength: [30,150]
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

        if ((elemId === "username" && elemLength > this.state.usernameLength[1]) ||
            (elemId === "commentText" && elemLength > this.state.commentLength[1])) {
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
            elemLength < this.state.usernameLength[0] ? borderColor = 'red' : borderColor = 'initial'
        } else if (elemId === "commentText") {
            elemLength < this.state.commentLength[0] ? borderColor = 'red' : borderColor = 'initial'
        }
        return borderColor
    }
}

export default CommentForm