import {articles} from '../fixtures'
import {DELETE_ARTICLE, FILTER_ARTICLES} from '../constants'
import { selectFilter, dateFilter } from '../utils/filterUtils'

export default (articleState = articles, action) => {
    const {type, payload} = action
    switch (type) {
        case DELETE_ARTICLE:
            return articleState.filter(article => article.id !== payload.id)

        case FILTER_ARTICLES:
            const range = payload.dateRange;
            const select = payload.select;

            if(!range.from && !range.to && !select.length) return articles

            let articlesBySelect = selectFilter(select, articles)
            let articlesByDate = dateFilter(range, articlesBySelect)

            return articlesByDate
    }
    return articleState
}
