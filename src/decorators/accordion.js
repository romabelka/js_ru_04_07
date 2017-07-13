import React from 'react'

export default (OriginalComponent) => class AccordionComponent extends React.Component {
	state = {
		openArticleId: null
	}

	toggleOpenArticle = (openArticleId) => () => {
		if (this.state.openArticleId === openArticleId) {
			this.setState({ openArticleId: null })
		} else {
			this.setState({openArticleId})
		}
	}	

	render(){
		return (
			<OriginalComponent {...this.props} openArticleId = {this.state.openArticleId} toggleOpenArticle = {this.toggleOpenArticle} />
		)
	}
}