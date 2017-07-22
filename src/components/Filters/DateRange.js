import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import PropTypes from 'prop-types';

import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    static propsType = {
        setFilter: PropTypes.func,
        curValue: PropTypes.object
    }

    // state = {
    //     from: null,
    //     to: null
    // }

    handleDayClick = (day) => {
        const resultDate = DateUtils.addDayToRange(day, this.state);

        // this.setState(resultDate);

        this.props.setFilter(resultDate)
    }

    render() {
        // const { from, to } = this.state
        const { from, to } = this.props.curValue;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default DateRange