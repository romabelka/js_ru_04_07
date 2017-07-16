import React, {Component} from 'react'
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class Calendar extends Component {

    state = {
        from: null,
        to: null,
    };

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);

        return this;
    };

    handleResetClick = e => {

        e.preventDefault();

        this.setState({
            from: null,
            to: null,
        });

        return this;
    };

    render() {
        const {from, to} = this.state;

        return (
            <div className="RangeExample">
                {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
                {from && !to && <p>Please select the <strong>last day</strong>.</p>}
                {from &&
                to &&
                <p>
                    You chose from {from.toString()} to {to.toString()} <a href="#" onClick={this.handleResetClick}>Reset</a>
                </p>}
                <DayPicker
                    numberOfMonths={2}
                    selectedDays={[from, {from, to}]}
                    onDayClick={this.handleDayClick}
                    fixedWeeks
                />
            </div>
        );
    }
}

export default Calendar