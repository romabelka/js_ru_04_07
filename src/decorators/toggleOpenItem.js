import React from 'react'

export default (OriginalComponent) => class Accordeon extends React.Component {
    state = {
        openItemId: null
    };

    toggleOpenItem = openItemId => () => this.setState({
        openItemId: this.state.openItemId === openItemId ? null : openItemId
    });

    render() {
        return <OriginalComponent
            {...this.props}
            openItemId = {this.state.openItemId}
            toggleOpenItem = {this.toggleOpenItem}
        />
    }
}