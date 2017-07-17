import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment'

class App extends Component {
    static propTypes = {

    };

    state = {
        selected: null,
        from: null,
        to: null,
    }
    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }
    handleReset = e => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    }

    render() {
        const {articles} = this.props
        const {from, to} = this.state;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <DayPicker onDayClick={this.handleDayClick}
                           numberOfMonths={2}
                           selectedDays={[from, { from, to }]}
                           onDayClick={this.handleDayClick}
                           fixedWeeks
                />
                <button onClick={this.handleReset}>Clear range</button>
                { from && to ?
                    <p>Date selected from {moment(from).format('LL')} to {moment(to).format('LL')}</p> :
                    <p>Please select the date</p>
                }
                <UserForm />
                <Select options = {options} onChange = {this.handleSelect} value = {this.state.selected} multi />
                <ArticleList articles = {articles}/>
                <ArticlesChart articles = {articles}/>
            </div>
        )
    }

    handleSelect = selected => this.setState({ selected })
}

export default App