import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = openArticleId => () => {
        if ( openArticleId == this.state.openArticleId ) {
            this.setState({openArticleId: null})
        } else {
            this.setState({openArticleId})
        }
    }

    render() {
        return <OriginalComponent {...this.props} openArticleId = {this.state.openArticleId} toggleOpenArticle = {this.toggleOpenArticle}/>
    }
}