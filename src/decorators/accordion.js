import React, { Component } from 'react'

export default (OriginalComponent) => class DecoratedComponent extends Component {
    state = {
        openArticleId: null
    }
    toggleOpenArticle = openArticleId => () => {
        if (openArticleId !== this.state.openArticleId) {
            this.setState({openArticleId});
        } else {
            this.setState({openArticleId: null});
        }
    }
    render() {
        return (
            <OriginalComponent
                {...this.props}
                toggleOpenArticle={this.toggleOpenArticle}
                openArticleId={this.state.openArticleId}
            />
        );
    }
}