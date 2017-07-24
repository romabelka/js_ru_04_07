import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'
import {selectArticles} from '../../AC'
import {dateRange} from '../../AC'
import {filterArticles} from '../../AC'
import {filterArticlesByDate} from '../../AC'


class Filters extends Component {
    static propTypes = {
      articles: PropTypes.array.isRequired,
    };

    render() {
        const { articles, handleSelect, selectedArticlesState, selectArticles, dateRange, filterArticles, dateRangeState, filterArticlesByDate } = this.props
        return (
            <div>
                 <SelectFilter
                 articles =  { articles }
                 handleSelect = { selectArticles }
                 filterArticles = { filterArticles }
                 selectedArticlesState = { selectedArticlesState }
                 dateRangeState = { dateRangeState }
                 />
                 <DateRange
                 articles =  { articles }
                 dateRange = { dateRange }
                 dateRangeState = { dateRangeState }
                 filterArticles = { filterArticles }
                 selectedArticlesState = { selectedArticlesState }
                 filterArticlesByDate = { filterArticlesByDate }
                 />
            </div>
        )
    }
}


export default connect ((state) => {
  return {
    selectedArticlesState: state.filters.select,
    dateRangeState: state.filters.dateRange,
    articles: state.filters.articles
  }
}, {selectArticles, dateRange, filterArticles, filterArticlesByDate})(Filters)
