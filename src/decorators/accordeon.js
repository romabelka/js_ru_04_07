import React, {Component} from 'react'

export default (OriginalComponent) => class AccordeonComponent extends Component {
    state = {
        itemId: null
    }

    toggleItem = (itemId) => () => this.setState({itemId : this.state.itemId === itemId ? null : itemId});

    render() {
        return <OriginalComponent {...this.props} toggleItem = {this.toggleItem} itemId = {this.state.itemId} />
    }
}