import React, {Component} from 'react';
import DayPicker from 'react-day-picker';
import DateRange from './DateRange'
import SelectFilters from './Select'

import 'react-day-picker/lib/style.css';

class Filters extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <SelectFilters articles = {[]}/>
                <DateRange/>
            </div>
        )
    }
}

export default Filters
