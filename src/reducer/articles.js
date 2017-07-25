import {articles} from '../fixtures'
import {DELETE_ARTICLE, FILTER_BY_DATE, FILTER_BY_TITLE} from '../constants'

export default (articleState = articles, action) => {
    const {type, payload} = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articleState.filter(article => article.id !== payload.id);
        case FILTER_BY_DATE:
            const {dateRange} = payload;
            return articles.filter(article => {
                let articleDate = new Date(article.date);
                if (dateRange.from && dateRange.to)
                {
                    return articleDate >= dateRange.from && articleDate <= dateRange.to
                }
                else if (dateRange.from && !dateRange.to)
                {
                    return articleDate >= dateRange.from
                }
                else if (!dateRange.from && dateRange.to)
                {
                    return articleDate <= dateRange.to
                }
                else
                {
                    return articles;
                }
            });
        case FILTER_BY_TITLE:
            const {selected} = payload;
            return articles.filter(article => {
                const a = selected.filter(item => {
                    return (article.id == item.value)
                });
                return !!a.length;
            });
    }
    return articleState
}