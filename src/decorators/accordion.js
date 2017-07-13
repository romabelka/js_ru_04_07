/**
 * Created by seryozhatebe on 13.07.17.
 */

import React from 'react'

export default (OriginalComponet) => class DecoratedComponent extends React.Component {
    state = {
        openArticleId: null
    };

    toggleOpenArticle = openArticleId => () => {
        if (this.state.openArticleId === openArticleId) {
            this.setState({
                openArticleId: null
            })
        } else {
            this.setState({openArticleId})
        }
    };

    render() {
        return <OriginalComponet {...this.props} state={this.state.openArticleId} toggleOpenArticle={this.toggleOpenArticle}/>
    }

}