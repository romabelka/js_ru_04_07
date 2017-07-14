import React from 'react';

export default (OriginalComponent) => class AccordionDecorator extends React.Component {
    state = {
        openedItemId: null
    }

    render() {
        return <OriginalComponent
            {...this.props}
            openedItemId = {this.state.openedItemId}
            toggleOpenItem = {this.toggleOpenItem}
        />
    }

    toggleOpenItem = itemId => () => this.setState({ openedItemId: itemId })
}
