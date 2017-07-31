import React, { Component } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {

    state = {
        selected: null
    }

    render() {
        const { options } = this.props

        return (<Select options = {options} onChange = {this.handleSelect} value = {this.state.selected} multi/>)
    }

    handleSelect = selected => this.setState({ selected })

}

export default SelectFilter