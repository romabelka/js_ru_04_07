import React, {Component} from 'react'

class Comment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const { comment } = this.props
        return (
            <div>
                <div>{comment.user}</div>
                <div>{comment.text}</div>
            </div>
        )
    }

}


export default Comment