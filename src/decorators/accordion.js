import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        openId: null
    };

    toggleOpen = openId => () => {
        if (this.state.openId === openId) {
            this.setState({openId: null}) // сворачивание элемента при повторном клике
        }
        else {
            this.setState({openId})
        }
    };

    render() {
        return <OriginalComponent {...this.props} openId={this.state.openId} toggleOpen={this.toggleOpen}/>
    };
}