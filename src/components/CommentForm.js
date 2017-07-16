import React, {Component} from 'react'
import './style.css'

class CommentForm extends Component {

    state = {
        name: '',
        text: '',
        isValidName: false,
        isValidText: false,
    };

    render() {
        return (
            <div>
                <h4>Add comment</h4>

                <div className={ this.state.isValidName ? 'input-success' : 'input-error' }>
                    name: <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                </div>

                <div className={ this.state.isValidText ? 'input-success' : 'input-error' }>
                    text: <textarea value={this.state.text} onChange={this.handleTextChange}/>
                </div>

                <button onClick={this.handleSubmit}>add comment</button>

            </div>
        )
    };

    validate = ev => {

        this.setState({
            isValidName: (this.state.name.length > 10)
        });

        this.setState({
            isValidText: (this.state.text.length > 30)
        });

        console.log(this.state);

        return this;
    };

    handleNameChange = ev => {

        if (this.state.name.length > 30) {
            return this;
        }

        this.setState({
            name: ev.target.value
        });

        return this.validate();
    };

    handleTextChange = ev => {

        if (this.state.text.length > 150) {
            return this;
        }

        this.setState({
            text: ev.target.value
        });

        return this.validate();
    };

    handleSubmit = ev => {

        this.setState({
            name: '',
            text: '',
        });

        return this.validate();
    }

}

export default CommentForm