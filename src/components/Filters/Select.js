import React, { Component, PropTypes } from 'react'
import Select from 'react-select'

import {FILTER_APRIL, FILTER_MAY, FILTER_JUNE, FILTER_ALL} from '../../constants';

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };


    render() {

        const options = [
            {
                label: FILTER_APRIL,
                value: FILTER_APRIL
            },
            {
                label: FILTER_MAY,
                value: FILTER_MAY
            },
            {
                label: FILTER_JUNE,
                value: FILTER_JUNE
            },
            {
                label: FILTER_ALL,
                value: FILTER_ALL
            }
        ]

        return <Select
            options={options}
            value={this.props.value}
            onChange={this.props.handleChange}
        />
    }
}

export default SelectFilter