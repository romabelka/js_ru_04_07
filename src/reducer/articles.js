import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'
import {arrToMap} from '../helpers'

export default (articleState = arrToMap(defaultArticles), action) => {
    const {type, payload, commentId} = action

    switch (type) {
        case DELETE_ARTICLE:
            //todo fix me
            return articleState.filter(article => article.id !== payload.id);
        case ADD_COMMENT:
            const article = articleState[payload.articleId]
            return {
                ...articleState,
                [payload.articleId]: {
                    ...article,
                    comments: (article.comments||[]).concat(commentId)
                }
            }
    }

    return articleState
}