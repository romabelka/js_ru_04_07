import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        openItemId: null
    }

    accordionOpen = openItemId => () => {
        if ( openItemId === this.state.openItemId ) {
            this.setState({openItemId: null})
        } else {
            this.setState({openItemId})
        }
    }

    render() {
        return <OriginalComponent {...this.props} openArticleId = {this.state.openItemId} toggleOpen = {this.accordionOpen}/>
    }
}