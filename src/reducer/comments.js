import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, START, SUCCESS, LOAD_COMMENTS_BY_PAGE} from '../constants'
import {arrToMap} from '../helpers'
import {OrderedMap, Map, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    pagination: new Map({}),
    total: null
})

const defaultState = new ReducerState()

export default (commentsState = defaultState, action) => {
    const {type, payload, response, randomId} = action

    switch (type) {
        case ADD_COMMENT:
            return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return commentsState.mergeIn(['entities'], arrToMap(response, CommentRecord))

        case LOAD_COMMENTS_BY_PAGE + START:
            return commentsState.setIn(['pagination', payload.page, 'loading'], true)

        case LOAD_COMMENTS_BY_PAGE + SUCCESS:
            return commentsState
                .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
                .setIn(['pagination', payload.page, 'loadedId'], response.records.map(comment => comment.id))
                .setIn(['pagination', payload.page, 'loading'], false)
                .set('total', response.total)
    }

    return commentsState
}