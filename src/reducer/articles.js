import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT_TO_ARTICLE} from '../constants'
import {arrToMap} from '../helpers'

export default (articleState = arrToMap(defaultArticles), action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            return Object.keys(articleState)
              .filter(article => article !== payload.id)
              .reduce((obj, key) => {
                obj[key] = articleState[key];
                return obj
              }, {})

        case ADD_COMMENT_TO_ARTICLE:
            if(!articleState[payload.articleId].comments) {
              articleState[payload.articleId].comments = []
            }
            articleState[payload.articleId].comments.push(payload.commentId)
            return Object.assign({}, articleState)
    }
    return articleState
}
