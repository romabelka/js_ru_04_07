import {ADD_COMMENT} from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import { arrToMap } from '../helpers'

export default (comments = arrToMap(defaultComments), action) => {
    const { type, payload, commentId} = action

    switch (type) {
        case ADD_COMMENT:
            const {user, text} = payload;
            
            return {...comments, [commentId]: {user, text, commentId}};
    }

    return comments
}