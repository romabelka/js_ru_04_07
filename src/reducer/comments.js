import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS, START} from '../constants'
import { arrToMap } from '../helpers'
import {Map, Record} from 'immutable'

const commentRecord = new Record({
        id: null,
        user: '',
        text: ''
})

const ReducerState = Record({
    entities: arrToMap([]),
    loading: false,
    loaded: false
})

export default (comments = ReducerState(), action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case ADD_COMMENT:
            const newComment = {...payload.comment, id: randomId};
            return comments.setIn(['entities', randomId], new commentRecord(newComment))

        case LOAD_COMMENTS + START:
            return comments.set('loading', true)

        case LOAD_COMMENTS + SUCCESS:
            return comments
                .set('entities', arrToMap(response, commentRecord))
                .set('loading', false)
                .set('loaded', true)

    }

    return comments
}