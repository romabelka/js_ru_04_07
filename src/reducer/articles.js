import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'
import {arrToMap} from '../helpers'

export default (articleState = arrToMap(defaultArticles), action) => {
    const {type, payload, randomId} = action

    switch (type) {
        case DELETE_ARTICLE:
            //todo fix me
            const tmpState = {...articleState}
            delete tmpState[payload.id]
            return tmpState

        case ADD_COMMENT:
            const article = articleState[payload.articleId]
            return {
                ...articleState,
                [payload.articleId]: {
                    ...article,
                    comments: (article.comments || []).concat(randomId)
                }
            }
    }
    return articleState
}