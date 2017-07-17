import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';

class App extends Component {
    static propTypes = {

    };

    state = {
        selected: null,
        from: null,
        to: null,
    }

    render() {
        const { from, to } = this.state
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
              <div className="RangeExample">
                  {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
                  {from && !to && <p>Please select the <strong>last day</strong>.</p>}
                  {from &&
                    to &&
                    <p>
                      You chose from
                      {' '}
                      {moment(from).format('L')}
                      {' '}
                      to
                      {' '}
                      {moment(to).format('L')}
                      .
                      {' '}<a href="." onClick={this.handleResetClick}>Reset</a>
                    </p>}
                  <DayPicker
                  selectedDays={[from, { from, to }]}
                  onDayClick={this.handleDayClick}
                  fixedWeeks
                  />
                </div>
                <UserForm />
                <Select options = {options} onChange = {this.handleSelect} value = {this.state.selected} multi />
                <ArticleList articles = {articles}/>
                <ArticlesChart articles = {articles}/>
            </div>
        )
    }

    handleSelect = selected => this.setState({ selected })

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
}

export default App
