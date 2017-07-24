import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'
import {connect} from 'react-redux'
import {filterArticles} from '../../AC'

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        dateRange: PropTypes.object.isRequired,
        filteredArticles: PropTypes.array,
        filterArticles: PropTypes.func
    };

    render() {
        const {articles, dateRange, filteredArticles, filterArticles} = this.props
        return (
            <div>
                <SelectFilter articles={articles}
                              filteredArticles={filteredArticles}
                              filterArticles={filterArticles}/>
                <DateRange dateRange={dateRange}/>
            </div>
        )
    }
}


export default connect((state) => ({
        articles: state.articles,
        dateRange: state.filters.dateRange,
        filteredArticles: state.filters.filteredArticles
    }),
    {filterArticles}
)(Filters)