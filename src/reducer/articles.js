import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'
import {arrToMap, mapToArr} from '../helpers'

export default (articleState = arrToMap(defaultArticles), action) => {
    const {type, payload} = action
    switch (type) {
        case ADD_COMMENT:
            const { articleId, comment } = payload;
            const thisArticle = articleState[articleId];
            return {
                ...articleState,
                [articleId] : {
                    ...thisArticle,
                    comments: [...thisArticle['comments'], comment.id]
                }
            }
        case DELETE_ARTICLE:
            return arrToMap(mapToArr(articleState).filter(article => article.id !== payload.id))
    }

    return articleState
}