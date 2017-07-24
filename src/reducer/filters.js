import {
    SET_SELECT_FILTER, 
    SET_PERIOD_FILTER
} from '../constants'

const defaultFilters = {
    selected: null,
    period: {
        from: null,
        to: null,
    },
}

export default (filters = defaultFilters, action) => {
    const {type, payload} = action

    switch (type) {
        case SET_SELECT_FILTER:
            return {...filters, selected: payload}
        case SET_PERIOD_FILTER:
            return {...filters, period: payload}    
    }

    return filters
}