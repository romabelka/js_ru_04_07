import {INCREMENT, DELETE_ARTICLE, SET_SELECT_FILTER, SET_PERIOD_FILTER} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function setSelectFilter(selected) {
    console.log('Select Filter');
    return {
        type: SET_SELECT_FILTER,
        payload: selected
    }
}

export function setPeriodFilter(period) {
    console.log('Select Period');
    return {
        type: SET_PERIOD_FILTER,
        payload: period
    }
}