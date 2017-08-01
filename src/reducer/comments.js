import { ADD_COMMENT } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import { arrToMap } from '../helpers'

export default (comments = arrToMap(defaultComments), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return {...comments, [randomId]: payload.comment }
    }

    return comments
}