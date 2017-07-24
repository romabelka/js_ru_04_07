import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'
import {connect} from 'react-redux'

class Filters extends Component {
    static propTypes = {};

    render() {
        const {articles, dateRange, selectedArticles} = this.props
        return (
            <div>
                <SelectFilter articles={articles} selectedArticles = {selectedArticles}/>
                <DateRange dateRange={dateRange}/>
            </div>
        )
    }
}


export default connect((state) => ({
        articles: state.articles,
        dateRange: state.filters.dateRange,
        selectedArticles: state.filters.selectedArticles
    })
)(Filters)