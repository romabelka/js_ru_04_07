import React from 'react';
import './style.css';

class Name extends React.Component{
        
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            isValid: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const value = event.target.value;
        const length = value.length;

        if (length < 10) {
            return this.setState({
                value: value,
                isValid: false
            })
        } else if (length < 30) {
            return this.setState({
                value: value,
                isValid: true
            })
        }
    }

    render() {
        const isError = !this.state.isValid;
        const classError = isError ? 'error' : '';
        
        return (
            <div>
                <label>Name: <br/>
                    <input type="text" onChange={this.handleClick} value={this.state.value}
                        className={classError}
                    />
                </label>
            </div>
        )
    }
}

export default Name;