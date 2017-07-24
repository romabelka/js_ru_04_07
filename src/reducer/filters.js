import {articles} from '../fixtures'
import {FILTER_BY_DATE, FILTER_BY_TITLE} from '../constants'

const defaultValues = {
    selectArticles : articles,
    selected: null,
    dateRange: {from: null, to: null}
};

export default (filterState = defaultValues, action) => {
    const {type, payload} = action;
    switch (type) {
        case FILTER_BY_TITLE:
            const {selected} = payload;
            return {...filterState, selected};
        case FILTER_BY_DATE:
            const {dateRange} = payload;
            return {...filterState, dateRange};
        default:
            return filterState;
    }

}