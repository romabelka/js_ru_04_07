import {INCREMENT, DELETE_ARTICLE, FILTER_BY_DATE, FILTER_BY_TITLE} from '../constants'

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

export function setSelectValue(selected) {
    return {
        type: FILTER_BY_TITLE,
        payload: { selected }
    }
}

export function setDateRange(dateRange) {
    return {
        type: FILTER_BY_DATE,
        payload: { dateRange }
    }
}