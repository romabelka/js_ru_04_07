import {SET_IDS_FILTER, SET_DATE_FILTER} from '../constants'

export default (filtersState = { ids: [] }, action) => {
    switch (action.type) {
        case SET_DATE_FILTER:
            filtersState = {
                range: {
                    from: Number(action.range.from),
                    to: Number(action.range.to)
                },
                ids: filtersState.ids
            }
            break

        case SET_IDS_FILTER:
            filtersState = {
                range: filtersState.range,
                ids: action.ids
            }
            break
    }

    return filtersState
}
