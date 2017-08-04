import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS, START} from '../constants'
import { arrToMap } from '../helpers'
import {Map, Set, Record} from 'immutable'

const commentRecord = new Record({
        id: null,
        user: '',
        text: ''
})

const ReducerState = Record({
    entities: arrToMap([]),
    loadingIds: Set(),
    loaded: false
})

export default (comments = ReducerState(), action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case ADD_COMMENT:
            const newComment = {...payload.comment, id: randomId};
            return comments.setIn(['entities', randomId], new commentRecord(newComment))

        case LOAD_COMMENTS + START:
            return comments.setIn(['loadingIds'], comments.loadingIds.add(payload.articleId))

        case LOAD_COMMENTS + SUCCESS:
            return (comments
                .mergeIn(['entities'], arrToMap(response, commentRecord))
                .setIn(['loadingIds'], comments.loadingIds.remove(payload.articleId)))

    }

    return comments
}