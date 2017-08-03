import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import { arrToMap } from '../helpers'
import {Map, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    user: '',
    text: '',
})

const ReducerState = Record({
    entities: arrToMap([]),
    loading: false,
    loaded: false
})

export default (comments = new ReducerState, action) => {
    const { type, payload, randomId, response } = action
    switch (type) {
        case ADD_COMMENT:
            return comments.set(randomId, new CommentRecord(payload.comment))

        case LOAD_COMMENTS + START:
            return comments.set('loading', true)

        case LOAD_COMMENTS + SUCCESS:
            return comments
                .set('entities', arrToMap(response, CommentRecord))
                .set('loading', false)
                .set('loaded', true)
    }

    return comments
}
