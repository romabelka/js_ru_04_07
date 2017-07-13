import React from 'react'
import PropTypes from 'prop-types'

export default (OriginalComponent) => class AccordeonComponent extends React.Component {
    static propTypes = {
        currentItemId: PropTypes.string.isRequired,
    }

    state = {
        currentItemId: null
    }

    toggleItem = (currentItemId) => () => this.setState({currentItemId : this.state.currentItemId === currentItemId ? null : currentItemId});

    render() {
        return <OriginalComponent {...this.props} toggleItem = {this.toggleItem} currentItemId = {this.state.currentItemId} />
    }
}