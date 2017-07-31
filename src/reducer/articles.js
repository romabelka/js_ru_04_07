import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'
import {arrToMap} from '../helpers'

export default (articleState = arrToMap(defaultArticles), action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            //todo fix me
            return articleState.filter(article => article.id !== payload.id)
        case ADD_COMMENT: 
            const { articleId, commentId } = payload;
            const thisArticle = articleState[articleId];
            return {
                ...articleState,
                [articleId] : {
                    ...thisArticle,
                    comments: [...thisArticle['comments'], commentId]
                }
            }
    }
    return articleState
}