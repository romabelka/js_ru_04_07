import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Myelement extends Component {
    static propTypes = {
        mycounter: PropTypes.number
    };

    render() {
        const {mycounter=0} = this.props
        return (
            <div>
                <h1>{mycounter}</h1>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        mycounter: state.mycount
    }
})(Myelement)