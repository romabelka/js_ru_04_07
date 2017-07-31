import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'
import {arrToMap} from '../helpers'

export default (articleState = arrToMap(defaultArticles), action) => {
    const {type, payload} = action
    let updatedState = {}

    switch (type) {
        case DELETE_ARTICLE:
            updatedState = Object.assign({}, articleState)

            delete updatedState[payload.id]

            return updatedState
        
        case ADD_COMMENT:
            updatedState = Object.assign({}, articleState)

            updatedState[payload.articleId].comments.push(payload.commentId)

            return updatedState
    }
    return articleState
}