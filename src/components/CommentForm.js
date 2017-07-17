import React, { Component } from 'react'
import PropTypes from 'prop-types'


class CommentForm extends Component {
   
    state = {
        username: '',
        comment: 'Add your comments:',
        color: ''
    }

    

    render() {
        
        return (
            <div>
                <br/>
                    username: <input style = {{color:this.state.color}} type = "text" value = {this.state.username} onChange = {this.handleChange} />
                <br/>
                    comment:  <textarea style = {{color:this.state.color}} value ={this.state.comment} onChange = {this.handleChangeComment} />
            </div>
        )
    }

    handleChange = ev => {
        if (ev.target.value.length > 30) return
        if (ev.target.value.length > 10) {
            this.setState({
               color: 'red'
           }) 
        }

        this.setState({
            username: ev.target.value
            
        })
        
    }

    handleChangeComment = ev => {
        if (ev.target.value.length > 150) return
        if (ev.target.value.length > 30) {
           this.setState({
               color: 'red'
           }) 
        } 

        this.setState({
           comment: ev.target.value
        })
 
    
/*
        this.setState({
            username: ''
        })
*/
    }
}

export default CommentForm