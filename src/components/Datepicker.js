import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


class Datepicker extends Component {

    state = {
        currentDate: new Date()
    };

    handleDayClick = day => {
        this.setState({
            currentDate: day,
        });
    };

    render() {
        return (
            <div>
                <DayPicker onDayClick={this.handleDayClick} selectedDays={this.state.currentDate}/>
                <div>Выбранная дата: {this.state.currentDate.toLocaleDateString()}</div>
            </div>
        )
    }
}

export default Datepicker