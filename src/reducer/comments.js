import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS, START } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import { arrToMap } from '../helpers'
import { Map, Record } from 'immutable'

const CommentRecord = Record({
    id: null,
    user: '',
    text: ''
})

const ReducerState = Record({
    entities: arrToMap([]),
    loading: false,
    loaded: false
})

export default (comments = new ReducerState, action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case LOAD_COMMENTS + START:
            return comments.set('loading', true);
        case LOAD_COMMENTS + SUCCESS:
            return comments
                .set('entities', arrToMap(response, CommentRecord))
                .set('loading', false)
                .set('loaded', true)
        case ADD_COMMENT:
            return comments.set(randomId, new Map(payload.comment))
    }

    return comments
}