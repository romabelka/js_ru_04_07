import React, {Component} from 'react'

export default (OriginalComponent) => class DecoratedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openElementId: null
    }
  };

  toggleOpenElement = openElementId => () => {
    let resultElement = (openElementId !== this.state.openElementId) ? openElementId : null ;
    this.setState(prevState => ({
      openElementId: resultElement
    }));
  };

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
