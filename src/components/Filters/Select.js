/**
 * Created by oem on 7/23/17.
 */
/**
 * Created by oem on 7/23/17.
 */
import React, {Component} from 'react';
import DayPicker from 'react-day-picker';
import Select from 'react-select'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    state = {
        selected: null
    };

    handleChange = (selected) => {
        this.setState(this.setState({selected}))
    };

    render() {
        const {articles} = this.props;
        const options = [];

        return <Select
            options = {options}
            value = {this.state.selected}
            multi = {true}
            onCange = {this.handleChange}
        />
    }

}

export default DateRange
