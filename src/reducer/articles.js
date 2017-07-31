import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'
import {arrToMap} from '../helpers'

export default (articleState = arrToMap(defaultArticles), action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            const tempState = {...articleState}
            delete tempState[payload.id]
            return tempState

        case ADD_COMMENT:
            const articleId = articleState[payload.articleId];
            const commentId = action.newId;

            return {
                ...articleState,
                [payload.articleId]: {
                    ...articleId,
                    comments: [...articleId['comments'], commentId]
                }
            }
    }
    return articleState
}