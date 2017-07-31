import { ADD_COMMENT } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import { arrToMap } from '../helpers'

export default (comments = arrToMap(defaultComments), action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT:
            return {
                ...comments,
                [payload.commentId]: {
                    id: payload.commentId,
                    user: payload.user,
                    text: payload.text,
                }
            }
    }

    return comments
}