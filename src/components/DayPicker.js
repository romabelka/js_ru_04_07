import React, { Component } from 'react';
import ReactDayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';

export default class DayPicker extends Component {
  static propTypes = {

  }
  state = {
    from: null,
    to: null
  }
  handleDayClick = day => {
   const range = DateUtils.addDayToRange(day, this.state);
   this.setState(range);
  }
  handleResetClick = () => {
    this.setState({
      from: null,
      to: null,
    });
  };
  render() {
    const { from, to } = this.state;
    return (<div>
      <div>
        {this.getSelectedRangeText()}
        {(from || to) && <button onClick={this.handleResetClick}>Сбросить</button>}
      </div>
      <ReactDayPicker
        selectedDays={[from, { from, to }]}
        onDayClick={this.handleDayClick}
        fixedWeeks />
    </div>);
  }
  getSelectedRangeText() {
    const { from, to } = this.state;
    if (!from && !to) return 'Выберите диапазон дат ';
    if (from && !to) return `Выбранная дата ${moment(from).format('L')} `;
    return `Выбранный диапазон дат с ${moment(from).format('L')} по ${moment(to).format('L')} `;
  }
}
