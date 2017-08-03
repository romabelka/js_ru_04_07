import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS} from '../constants'
import { arrToMap } from '../helpers'
import {OrderedMap, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({})
})

export default (commentsState = new ReducerState(), action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case ADD_COMMENT:
            return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))

        case LOAD_COMMENTS + SUCCESS:
            return commentsState.update('entities', entities => entities.merge(arrToMap(response, CommentRecord)))
    }
    return commentsState
}