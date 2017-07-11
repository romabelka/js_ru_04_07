import React, {Component} from 'react'

class Comments extends Component {
    constructor (props) {
        super (props)

        this.state = {
            isOpen:false
        
        }
    }

    render() {
        const { component } = this.props
        
        return (
            <div>
                <button onClick = {this.handleClick}>{this.getText()}</button>
                {this.getBody()}
            </div>
        )
             
    }

    getBody() {
        if (!this.state.isOpen) return null

        return <div>
                   <p>{this.props.comment.user}</p>
                   <p>{this.props.comment.text}</p>
               </div>
    }

     getText () {
        if (!this.state.isOpen) 
           return <p>Comments</p>
        
           return <p>Close</p>
    }

    

    handleClick = (event) => {
        event.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen             

        })   
        
    }
}


export default Comments