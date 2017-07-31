import {  } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import { arrToMap } from '../helpers'
import {ADD_COMMENT} from '../constants'

export default (comments = arrToMap(defaultComments), action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT:
            let updatedState = Object.assign({}, comments)
            let newComment = {
                id: payload.commentId,
                text: payload.text,
                user: payload.user
            }

            updatedState[payload.commentId] = newComment

            return updatedState
    }

    return comments
}