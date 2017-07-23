import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'

class Filters extends Component {
    static propTypes = {
    };

    render() {
        return (
            <div>
                <SelectFilter
                    articles = {[]}
                    value={this.props.value}
                    handleChange={this.props.handleChangeSelect}/>
                <DateRange
                    handleChange={this.props.handleChangeDate}/>
            </div>
        )
    }
}

export default Filters