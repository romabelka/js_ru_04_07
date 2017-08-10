import React, {Component} from 'react'
import PropTypes from 'prop-types'

class LocalizationProvider extends Component {
    static propTypes = {
        local: PropTypes.object
    }

    static childContextTypes = {
        local: PropTypes.object
    }

    getChildContext() {
        return {
            local: this.props.local
        }
    }


    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}


export default LocalizationProvider
