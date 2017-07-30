import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'
import {arrToMap} from '../helpers'

export default (articleState = arrToMap(defaultArticles), action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            //todo fix me
            return articleState.filter(article => article.id !== payload.id);
        case ADD_COMMENT:
            const curArticle = articleState[payload.idArticle];
            const idComment = payload.id;

            return {
                ...articleState,
                [payload.idArticle]: {
                    ...curArticle,
                    comments: [...curArticle['comments'], idComment]
                }
            }
    }
    return articleState
}