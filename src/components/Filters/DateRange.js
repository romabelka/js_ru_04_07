/**
 * Created by oem on 7/23/17.
 */
import React, {Component} from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    state = {
        from: null,
        to: null
    };

    handleDayClick = (day) => {
        this.setState(DayPicker.DateUtils.addDayToRange(day, this.state))
    };

    render() {
        const {from, to} = this.state;
        const selectRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;

        return (
            <div className="data-range">
                <DayPicker
                    selectedDays={ day => DayPicker.DateUtils.isDayInRange(day, {from, to}) }
                    onDayClick={ this.handleDayClick }
                />
                {selectRange}
            </div>
        )
    }

}

export default DateRange