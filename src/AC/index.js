import {DELETE_ARTICLE, INCREMENT, MYINCREMENT, FILTER_DATE, FILTER_SELECT} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function myincrement() {
    return {
        type: MYINCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filterDate(date) {
    return {
        type: FILTER_DATE,
        payload: { date }
    }
}

export function filterSelect(selected) {
    return {
        type: FILTER_SELECT,
        payload: { selected }
    }
}
