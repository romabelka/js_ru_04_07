import React, {Component} from 'react'

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      textVal: '',
    }
  }
  onChange(ev, stateKey) {
    this.setState({
      [stateKey]: ev.target.value
    });
  }
  render() {
    return(
      <div>
        <input type="text" value={this.state.inputVal} onChange={(ev) => {this.onChange(ev, 'inputVal')}}/>
        <textarea value={this.state.textVal} onChange={(ev) => {this.onChange(ev, 'textVal')}}></textarea>
      </div>
    );
  }
}

export default CommentForm