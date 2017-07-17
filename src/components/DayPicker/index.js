import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class MyDayPicker extends React.Component {
    state = {}

    render() {
        const {from, to} = this.state;

        return (
            <div>
                <DayPicker
                    selectedDays={{ from: from, to: to }}
                    onDayClick={this.onDayClick}
                />
                <span>{from || to ? 'You selected date' : 'Select date'}
                    {from && ' from ' + from.toLocaleDateString()}
                    {to && ' to ' + to.toLocaleDateString()}
                </span>
            </div>
        );
    }

    onDayClick = date => {
        const state = this.state;

        if (state.from && state.to) {
            this.setState({ from: date, to: null });
        } else if (state.from) {
            this.setState({ to: date });
        } else {
            this.setState({ from: date });
        }
    }
}
