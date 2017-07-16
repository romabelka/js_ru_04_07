import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import Calendar from './Calendar';

class App extends Component {
    static propTypes = {

    };

    state = {
        selected: null
    }

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <UserForm />
                <Select options = {options} onChange = {this.handleSelect} value = {this.state.selected} multi />
                <ArticleList articles = {articles}/>
                <ArticlesChart articles = {articles}/>
                <Calendar/>
            </div>
        )
    }

    handleSelect = selected => this.setState({ selected })
}

export default App