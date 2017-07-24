import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {setDateFilter} from '../../AC'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    static PropTypes = {
        setDateFilter: PropTypes.func.isRequired
    }

    state = {
        from: null,
        to: null
    }

    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
        this.props.setDateFilter(range)
    }

    render() {
        const { from, to } = this.state
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

export default connect(
    null,
    { setDateFilter }
)(DateRange)
