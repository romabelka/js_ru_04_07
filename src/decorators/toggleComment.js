import React from 'react';

export default (OriginComponent) => class ToggleComment extends React.Component{
    state = {
        openArticleId: null
    };

    toggleOpenArticle = (openArticleId) => () => {
        if (this.state.openArticleId === openArticleId) {
            this.setState({ openArticleId: null });
        } else {
            this.setState({openArticleId})
        }
    };

    render() {
        return (
            <OriginComponent {...this.props} openArticleId = {this.state.openArticleId}
                toggleOpenArticle = {this.toggleOpenArticle}
            />
        )
    }
}
