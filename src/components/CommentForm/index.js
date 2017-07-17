import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import CSSTransitionGroup from 'react-addons-css-transition-group'
import './style.css'

class CommentForm extends Component {
    static propTypes = {
		userfield: PropTypes.string,
		comment: PropTypes.string,
		nameErr: PropTypes.bool,
		commentErr: PropTypes.bool
    };

    state = {
        userfield: '',
		comment: '',
		nameErr: false,
		commentErr: false
    }

    render() {
        return (
            <div>
				<div className = {this.errorClass(this.state.nameErr)} >
					Your name: 
						<input type = "text" value = {this.state.userfield} onChange = {this.handleChangeName} />
				</div>
				<div className = {this.errorClass(this.state.commentErr)} >
					Your comment: <textarea value = {this.state.comment} onChange = {this.handleChangeComment}></textarea>
				</div>
				<div>
					<button onClick = {this.handleChangeReset} >Очистить</button>
					<button>Добавить</button>
				</div>
            </div>
        )
    }
	
	errorClass = (error) => {
		return error ? 'err':''
	}
	
	handleChangeName = ev => {
		if (ev.target.value.length > 30) {
			 this.setState({
				 nameErr: true
			 })
            return 
        }else{
			this.setState({
				 nameErr: false
			 })
		}
		
        this.setState({
            userfield: ev.target.value,
        })
    }
	
	handleChangeComment = ev => {
		if (ev.target.value.length > 150) {
			 this.setState({
				 commentErr: true
			 })
            return 
        }else{
			this.setState({
				 commentErr: false
			 })
		}
		
        this.setState({
			comment: ev.target.value
        })
    }
	
	handleChangeReset = ev => {
        this.setState({
			userfield: '',
			comment: ''
        })
    }
	
}

export default CommentForm