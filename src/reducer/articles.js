import {articles} from '../fixtures'
import {DELETE_ARTICLE, FILTER_APRIL, FILTER_MAY, FILTER_JUNE, FILTER_ALL, FILTER_DATA} from '../constants'

export default (articleState = articles, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            return articleState.filter(article => article.id !== payload.id);
        case FILTER_ALL:
            return articles;
        case FILTER_APRIL:
            return articles.filter(article => (article.date > '2016-04-01T00:00:00.000Z' && article.date < '2016-05-01T00:00:00.000Z'));
        case FILTER_MAY:
            return articles.filter(article => (article.date > '2016-05-01T00:00:00.000Z' && article.date < '2016-06-01T00:00:00.000Z'));
        case FILTER_JUNE:
            return articles.filter(article => (article.date > '2016-06-01T00:00:00.000Z' && article.date < '2016-07-01T00:00:00.000Z'));
        case FILTER_DATA:
            if (payload.from && payload.to) {
                 return articleState.filter(article => (article.date > payload.from.toISOString()  && article.date < payload.to.toISOString()));
            }

    }
    return articleState
}