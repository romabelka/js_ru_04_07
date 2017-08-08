import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS, START, SUCCESS} from '../constants'
import {arrToMap} from '../helpers'
import {OrderedMap, Map, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    comments: new OrderedMap({})
})

const defaultState = new ReducerState()

export default (commentsState = defaultState, action) => {
    const {type, payload, response, randomId} = action

    switch (type) {
        case ADD_COMMENT:
            return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return commentsState.mergeIn(['entities'], arrToMap(response, CommentRecord))

        case LOAD_COMMENTS + SUCCESS:
            return commentsState.setIn(['comments'], arrToMap(response.records, CommentRecord))

    }

    return commentsState
}
