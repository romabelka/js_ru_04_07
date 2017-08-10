import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'
import localization from '../../decorators/localization'

class Menu extends Component {
    static propTypes = {
        dict: PropTypes.object
    }

    render() {
        return (
            <div>
                <h2>{this.props.dict.Main_Menu}: </h2>
                {this.props.children}
            </div>
        )
    }
}

export { MenuItem }
export default localization(Menu)