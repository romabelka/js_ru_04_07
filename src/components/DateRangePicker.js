import React from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const WEEKDAYS_SHORT_RU = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
const MONTHS_RU = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
]


class DateRangePicker extends React.Component {
    state = {
        from: null,
        to: null,
    };

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };

    handleResetClick = e => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    };

    render() {
        const {from, to} = this.state;
        return (
            <div>
                {!from && !to && <p>Выберите <strong>первый день</strong> диапазона.</p>}
                {from && !to && <p>Выберите <strong>последний день</strong> диапазона.</p>}
                {from &&
                to &&
                <p>
                    {`Вы выбрали диапазон с
                    ${from.getDay()}/${from.getMonth()}/${from.getFullYear()}
                    по
                    ${to.getDay()}/${to.getMonth()}/${to.getFullYear()}. `}
                    <a href="." onClick={this.handleResetClick}>Отменить выбор</a>
                </p>}
                <DayPicker
                    numberOfMonths={2}
                    selectedDays={[from, {from, to}]}
                    onDayClick={this.handleDayClick}
                    fixedWeeks
                    firstDayOfWeek={1}
                    locale={'ru'}
                    weekdaysShort={WEEKDAYS_SHORT_RU}
                    months={MONTHS_RU}
                />
            </div>
        );
    }
}

export default DateRangePicker