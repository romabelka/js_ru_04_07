import React, {Component} from 'react'

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      inputValError: false,
      textVal: '',
      textValError: false,
    }
  }
  changeHandler(ev, stateKey) {
    const constfieldValue = ev.target.value;

    if (stateKey === 'inputVal') {
      if (constfieldValue.length >= 30) return
      this.validateMinLength(constfieldValue, stateKey, 10)

    } else if (stateKey === 'textVal') {
      if (constfieldValue.length >= 150) return
      this.validateMinLength(constfieldValue, stateKey, 30)
    }

    this.setState({
      [stateKey]: ev.target.value
    });
  }

  validateMinLength(val, stateKey, minLength) {
    val.length <= minLength ?
        this.setState({[`${stateKey}Error`]: true}) :
        this.setState({[`${stateKey}Error`]: false})
  }

  render() {
    const errorStyle = {
      border: '1px solid red'
    }
    const style = {
      border: '1px solid #000'
    }
    return(
      <form>
        <input type="text"
               value={this.state.inputVal}
               onChange={(ev) => {this.changeHandler(ev, 'inputVal')}}
               style={this.state.inputValError ? errorStyle : style}
        />
        <br/>
        <br/>
        <textarea value={this.state.textVal}
                  onChange={(ev) => {this.changeHandler(ev, 'textVal')}}
                  style={this.state.textValError ? errorStyle : style}>
        </textarea>
        <br/>
        <button>Send</button>
      </form>
    );
  }
}

export default CommentForm