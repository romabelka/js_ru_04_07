import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import DateRange from './DateRange'
import SelectFilter from './Select'

import { filterDate, filterSelect } from '../../AC/index';

class Filters extends Component {
    static propTypes = {
    };

    render() {
        const {
            articles, filterDate, filterSelect, filtersValue
        } = this.props;


        console.log('FILTERS props = ', this.props);

        return (
            <div>
                <SelectFilter articles = {articles}
                              setFilter = {filterSelect}
                              curValue = {filtersValue.select}
                />
                <DateRange setFilter = {filterDate} curValue = {filtersValue.dateRange} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        filtersValue: state.filters
    }
}

const mapDispatchToProps = {
    filterDate,
    filterSelect
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)