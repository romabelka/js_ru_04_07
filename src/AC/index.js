import {INCREMENT, DELETE_ARTICLE, FILTER_APRIL, FILTER_MAY, FILTER_JUNE, FILTER_ALL, FILTER_DATA, SET_FILTER} from '../constants'

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

export function filterApril() {
    return {
        type: FILTER_APRIL
    }
}

export function filterMay() {
    return {
        type: FILTER_MAY
    }
}


export function filterJune() {
    return {
        type: FILTER_JUNE
    }
}

export function filterAll() {
    return {
        type: FILTER_ALL
    }
}

export function filterData(from, to) {
    return {
        type: FILTER_DATA,
        payload: { from, to }
    }
}

export function setFilter(filterType) {
    return {
        type: SET_FILTER,
        payload: { filterType }
    }
}
