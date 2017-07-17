import React, { Component } from 'react'
import './style.css'

//import 'bootstrap/dist/css/bootstrap-theme.min.css'

class UserForm extends Component {

    state = {
        userName: '',
        userComment: ''
    };

    render() {
        return (
            <div>
                <div className="row">
                    <h3 className="col-sm-offset-2 col-sm-10">Хотите оставить комментарий?</h3>
                </div>
                <form className="form-horizontal" formAction="" onSubmit={this.saveForm}>
                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="">Имя: </label>
                        <div className="col-sm-10">
                            <input name="userName" className="form-control" type="text" onChange={this.handleChange} value={this.state.userName}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="">Ваш комментарий: </label>
                        <div className="col-sm-10">
                            <textarea name="userComment" className="form-control" onChange={this.handleChange} value={this.state.userComment} rows="3"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default">Отправить</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    saveForm = event => {
        event.preventDefault();
        console.log('here we will save this form');
    };

    handleChange = event => {

        const target = event.target;
        const {name, value } = target;

        const notValidClass = ' not-valid';

        if (!this.state.hasOwnProperty(name)) return false;

        if (
            (name == 'userName' && value.length > 30) ||
            (name == 'userComment' && value.length > 150)
        ) return false;

        if (
            (name == 'userName' && value.length < 10) ||
            (name == 'userComment' && value.length < 30)
        ){
            if (!this.hasClass(target.className, notValidClass))
                target.className += notValidClass;
        }
        else
        {
            if (this.hasClass(target.className, notValidClass))
                target.className = target.className.replace(notValidClass,'');
        }


        this.setState({
            [name]: value
        });
    };

    //Куда лучше всего вынести подобную функцию? В декораторы?
    hasClass = (elClasses, lookingClass) => (elClasses.indexOf(lookingClass) >= 0);
}

export default UserForm