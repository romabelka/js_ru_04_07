import { ADD_COMMENT } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import { arrToMap } from '../helpers'
import {Map, Record} from 'immutable'

const commentRecord = new Record({
        id: null,
        user: '',
        text: ''
})

export default (comments = arrToMap(defaultComments, commentRecord), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(randomId, new Map(payload.comment))
    }

    return comments
}