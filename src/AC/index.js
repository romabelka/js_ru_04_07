import {INCREMENT, DELETE_ARTICLE, SET_IDS_FILTER, SET_DATE_FILTER} from '../constants'

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

export function setDateFilter(range) {
    return {
        type: SET_DATE_FILTER,
        range: range
    }
}

export function setIdsFilter(ids) {
    return {
        type: SET_IDS_FILTER,
        ids: ids
    }
}
