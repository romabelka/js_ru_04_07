import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, START, SUCCESS, LOAD_COMMENTS} from '../constants'
import {arrToMap, idToMap, getNumberOfPages} from '../helpers'
import {OrderedMap, Map, Record, Set} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const PageRecord = Record({
    loading: new Set(),
    loaded: new Set(),
    numberOfPages: 0,
    commentsOnPage: new Map({})
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    pages: new PageRecord()
})

const defaultState = new ReducerState()

export default (commentsState = defaultState, action) => {
    const {type, payload, response, randomId} = action

    switch (type) {
        case ADD_COMMENT:
            return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return commentsState.mergeIn(['entities'], arrToMap(response, CommentRecord))

        case LOAD_COMMENTS + START:
            return commentsState
                .mergeIn(['pages', 'loading'], payload.page)

        case LOAD_COMMENTS + SUCCESS:
            return commentsState
                .mergeIn(['pages', 'loaded'], payload.page)
                .removeIn(['pages', 'loading'], payload.page)
                .setIn(['pages', 'numberOfPages'], getNumberOfPages(response.total, payload.limit))
                .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
                .mergeIn(['pages', 'commentsOnPage'], idToMap(payload.page, response.records))


    }

    return commentsState
}