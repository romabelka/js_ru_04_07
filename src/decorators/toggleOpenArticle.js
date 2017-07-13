import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = openArticleId => () => {
        this.state.openArticleId === openArticleId ? this.setState({ openArticleId : null }) : this.setState({ openArticleId })
    }

    render() {
        return <OriginalComponent {...this.props} openArticleId = {this.state.openArticleId} toggleOpenArticle = {this.toggleOpenArticle}/>
    }
}