import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {myincrement} from '../AC'

class Mycounter extends Component {
    static propTypes = {
        myincrement: PropTypes.func
    };

    render() {
        const {myincrement} = this.props
        return (
            <div>
                <button onClick = {myincrement}>increment +1000</button>
            </div>
        )
    }
}

export default connect(
(state) => {
    return {
        //mycount: state.mycounter
    }
}
, { myincrement })(Mycounter)