import React from 'react'

export default (OriginalComponent) => class Accordion extends React.Component {

    state = {
        openArticleId: null
    };

    toggleOpenArticle = openArticleId => () => {

        if (openArticleId === this.state.openArticleId) {
            this.setState({ openArticleId: null });
        } else {
            this.setState({ openArticleId: openArticleId })
        }
    };

    render() {
        return <OriginalComponent {...this.props}  openArticleId = {this.state.openArticleId} toggleArticleId = {this.toggleOpenArticle} />
    }
}