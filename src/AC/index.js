import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLES, DATE_RANGE, FILTER_ARTICLES, SELECT_ARTICLES_BY_DATE} from '../constants'

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

export function selectArticles(selected) {
    return {
        type: SELECT_ARTICLES,
        payload: { selected }
    }
}

export function dateRange(range) {
    return {
        type: DATE_RANGE,
        payload: { range }
    }
}

export function filterArticles(select, dateRange) {
    return {
        type: FILTER_ARTICLES,
        payload: { select, dateRange }
    }
}
export function filterArticlesByDate(articles, dateRange) {
    return {
        type: SELECT_ARTICLES_BY_DATE,
        payload: { articles, dateRange }
    }
}
