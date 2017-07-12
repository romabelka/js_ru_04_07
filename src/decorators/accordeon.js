import React, {Component} from 'react'

export default (OriginalComponent) => class AccordeonComponent extends Component {
    state = {
        openItemId: null
    }

    toggleItem = (itemId) => () => this.setState({itemId})

    render() {
        return <OriginalComponent {...this.props} />
    }
}