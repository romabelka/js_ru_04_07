import { ADD_COMMENT } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import { arrToMap } from '../helpers'

export default (comments = arrToMap(defaultComments), action) => {
    const { type, payload } = action
    
    switch (type) {
        case ADD_COMMENT:
            const { comment } = payload;
            return {
                ...comments,
                [comment.id]: comment
            }
    }

    return comments
}