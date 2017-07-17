import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import DatePicker from './DatePicker'

import Select from 'react-select'
import 'react-select/dist/react-select.css'

class App extends Component {

    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })).isRequired
    };

    // Есть разница объявления state в constructor или так?
    state = {
        selected: null
    };

    render() {
        const {articles} = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return (
            <div className="container">
                <DatePicker />
                <Select options = {options} onChange = {this.handleSelect} value = {this.state.selected} multi />
                <ArticleList articles = {articles}/>
                <ArticlesChart articles = {articles}/>
            </div>
        )
    }

    handleSelect = selected => this.setState({ selected })
}

export default App