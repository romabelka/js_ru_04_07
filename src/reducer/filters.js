import {SELECT_ARTICLES, DATE_RANGE, SELECT_ARTICLES_BY_DATE} from '../constants'
import {articles} from '../fixtures'
import { dateFilter } from '../utils/filterUtils'

const select = (state = [], action) => {
    const {type, payload} = action
    switch (type) {
        case SELECT_ARTICLES:
        return state = payload.selected
    }
    return state
}

const dateRange = (state = {from: null, to: null}, action) => {
    const {type, payload} = action
    switch (type) {
        case DATE_RANGE:
        return state.dateRange = payload.range
    }
    return state
}

const articlesByDate = (state = articles, action) => {
    const {type, payload} = action
    switch (type) {
        case SELECT_ARTICLES_BY_DATE:
        let articlesByDate = dateFilter(payload.dateRange, articles);
        return articlesByDate
    }
    return state
}

export default (state = {}, action) => {
    return {
      select: select(state.select, action),
      dateRange: dateRange(state.dateRange, action),
      articles: articlesByDate(state.articles, action)
    }
}
