import React from 'react'
import './style.css'
class CommentForm extends React.Component {

    state = {
        text: '',
        username: '',
        textIsValid:true,
        usernameIsValid: true
    };

    handleChange = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state)
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.validateForm().then(()=>{
            if(this.state.textIsValid && this.state.usernameIsValid){
                alert(`Комментарий отправлен.\nИмя: ${this.state.username}\nТекст: ${this.state.text}`);
                this.setState({
                    text:'',
                    username:''
                })
            }
        })


    };

    validateForm(){
        return new Promise(resolve =>{
            let textLength = this.state.text.length;
            let usernameLength = this.state.username.length;
            this.setState({
                textIsValid:textLength > 30 && textLength < 150,
                usernameIsValid: usernameLength > 10 && usernameLength < 30
            },()=>{
                resolve();
            })
        })

    }


    render(){
        return (
            <form onSubmit={this.handleFormSubmit} action="">
                <div><label htmlFor="user">Имя:</label> </div>
                <div><input className={!this.state.usernameIsValid ? 'invalid' : '' } onChange = {this.handleChange} name = 'username' type = "text" value={this.state.username}/></div>
                <div><label htmlFor="text">Текст:</label></div>
                <div><textarea className={!this.state.textIsValid ? 'invalid' : '' } onChange={this.handleChange} name = 'text' type = "text" value={this.state.text}/></div>
                <div><button type="submit">Отправить</button></div>
            </form>


        )
    }

}

export default CommentForm