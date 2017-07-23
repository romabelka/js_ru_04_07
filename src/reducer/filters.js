import {
    FILTER_DATE,
    FILTER_SELECT
} from '../constants';

const initState = {
    dateRange: { from: null, to: null },
    select: ''
};

export default (state = initState, action) => {
    const {type, payload} = action;

    switch (type) {

        case FILTER_DATE:
            return { ...state, dateRange: payload };

        case FILTER_SELECT:
            return {...state, select: payload };

    }

    return state
}