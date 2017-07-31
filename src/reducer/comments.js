import { ADD_COMMENT } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import { arrToMap } from '../helpers'

export default (comments = arrToMap(defaultComments), action) => {
    const { type, payload , newId} = action

    switch (type) {
        case ADD_COMMENT:{
            return {...comments, [newId]: payload.comment}
        }
    }

    return comments
}