import {
    FILTER_DATE,
    FILTER_SELECT
} from '../constants';

const initState = {
    dateRange: '',
    select: ''
};

export default (state = initState, action) => {
    const {type, payload} = action;
    // console.log('reducer filter = ', action);
    // console.log('reducer filter {} = ', { ...state, select: payload });

    switch (type) {

        case FILTER_DATE:
            return { ...state, dateRange: payload };

        case FILTER_SELECT:
            return {...state, select: payload };

    }

    return state
}