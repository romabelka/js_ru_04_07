import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class App extends Component {
    static propTypes = {

    };

    state = {
        selected: null,
        from: null,
        to: null,
    }

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const { from, to } = this.state;
        return (
            <div>
                {/* <UserForm />
                <Select options = {options} onChange = {this.handleSelect} value = {this.state.selected} multi /> */}
                {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
                {from && !to && <p>Please select the <strong>last day</strong>.</p>}
                {from &&
                to &&
                <p>
                    You chose from
                    {' '}
                    {from.toISOString().slice(0, 10)}
                    {' '}
                    to
                    {' '}
                    {to.toISOString().slice(0, 10)}
                    .
                    {' '}<a href="." onClick={this.handleResetClick}>Reset</a>
                </p>}
                <DayPicker
                    numberOfMonths={2}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                    fixedWeeks
                />
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