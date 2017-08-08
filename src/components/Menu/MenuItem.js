import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

class MenuItem extends Component {
    static propTypes = {
        to: PropTypes.string
    };

    render() {
        const { to } = this.props
        return (
            <div>
                <NavLink to = {to} activeStyle = {{ color: 'red' }}>{to}</NavLink>
            </div>
        )
    }
}

export default MenuItem