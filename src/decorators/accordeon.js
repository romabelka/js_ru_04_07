import React, { Component } from 'react';

export default (OriginalComponent) => class DecoratedComponent extends Component {
  state = {
    openChildId: null
  }
  render() {
    return <OriginalComponent {...this.props} openChildId={this.state.openChildId} toggleOpen={this.toggleOpenArticle}/>
  }
  toggleOpenArticle = (childId) => () => {
    const nextOpenChildId = childId === this.state.openChildId ? null : childId;
    this.setState({ openChildId: nextOpenChildId });
  }
}
