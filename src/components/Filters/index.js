import React, { Component } from 'react'
import DateRange from './DateRange'
import SelectFilter from './Select'

function Filters() {
    return (
        <div>
            <SelectFilter />
            <DateRange />
        </div>
    )
}

export default Filters;