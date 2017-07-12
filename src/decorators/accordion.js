import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default (OriginalComponent) => class DecoratedComponent extends Component {
  static propTypes = {
    openElementId: PropTypes.number
  };

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
