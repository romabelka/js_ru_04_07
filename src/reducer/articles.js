import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE} from '../constants'
import {arrToMap} from '../helpers'

export default (articleState = arrToMap(defaultArticles), action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            const tempState = {...articleState}
            delete tempState[payload.id]
            return tempState
    }
    return articleState
}