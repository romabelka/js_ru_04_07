import React from 'react';

export default Component => class InputValidCount extends React.Component{
    constructor(props) {
        super(props)
        
        this.state = {
            isValid: true
        }
    }


    
    render() {
        return <Component {...this.props} valueInput/>
    }
}