import {
    INCREMENT,
    DELETE_ARTICLE,
    FILTER_DATE,
    FILTER_SELECT
} from '../constants'

export function filterDate(date){
    return {
        type: FILTER_DATE,
        payload: date
    }
}

export function filterSelect(select) {
    return {
        type: FILTER_SELECT,
        payload: select
    }
}

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