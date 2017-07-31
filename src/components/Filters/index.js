import React, { Component } from 'react'
import DateRange from './DateRange'
import SelectFilter from './Select'

class Filters extends Component {

    render() {
        const { articles } = this.props
        const options = articles.map( article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <DateRange />
                <SelectFilter options = {options} />
            </div>
        )
    }
}

export default Filters