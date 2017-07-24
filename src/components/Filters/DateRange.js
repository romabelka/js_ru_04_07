import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css';
import { connect } from 'react-redux';
import { setPeriodFilter } from '../../AC'

class DateRange extends Component {
    static propTypes = {
        period: PropTypes.shape({
            from: PropTypes.any,
            to: PropTypes.any
        }).isRequired,
        setPeriodFilter: PropTypes.func.isRequired
    }

    handleDayClick = (day) => {
        const {setPeriodFilter, period} = this.props;
        setPeriodFilter(DateUtils.addDayToRange(day, period))
    }

    render() {
        const { from, to } = this.props.period
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

const mapStateToProps = ({filters}) => {
    return {
        period: filters.period
    }
}

export default connect(mapStateToProps, { setPeriodFilter })(DateRange)