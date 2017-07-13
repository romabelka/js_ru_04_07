import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {

    state = {
        openArticleId: null
    };

    render (){
        return <OriginalComponent
            {...this.props}
            toggleOpen = {this.toggleOpenArticle}
            openArticleId = {this.state.openArticleId}
        />
    }

    toggleOpenArticle = openArticleId => () => {

        if (openArticleId === this.state.openArticleId)
            return this.setState({ openArticleId : null });

        return this.setState({ openArticleId })
    }

}