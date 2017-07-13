import React from 'react'
import PropTypes from 'prop-types'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
    }

    state = {
        isOpen: false
    }

    toggleOpen = () => this.setState({
        isOpen: !this.state.isOpen
    })

    render() {
        return <OriginalComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen}/>
    }
}