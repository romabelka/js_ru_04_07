import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {

    handleDayClick = (day) => {
        const { articles, filterArticles, dateRange, dateRangeState, selectedArticlesState, filterArticlesByDate } = this.props;
        dateRange(DateUtils.addDayToRange(day, dateRangeState))
        filterArticles(selectedArticlesState, dateRangeState.dateRange);
        filterArticlesByDate(articles, dateRangeState.dateRange);
    }

    render() {
        const { dateRangeState } = this.props;
        const { from, to } = dateRangeState
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
