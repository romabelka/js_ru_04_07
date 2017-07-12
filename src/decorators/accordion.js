import React, {Component} from 'react'

export default (OriginalComponent) => class DecoratedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openElementId: null
    }
  };

  toggleOpenElement = openElementId => () => this.setState({ openElementId });

  render() {
    return (
      <OriginalComponent
        {...this.props}
        toggleOpen = {this.toggleOpenElement}
        isOpen = {this.state.openElementId}
      />
    )
  }
}
