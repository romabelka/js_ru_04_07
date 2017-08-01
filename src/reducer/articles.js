import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, SUCCESS, START} from '../constants'
import {arrToMap} from '../helpers'
import {Record} from 'immutable'

const ArticleRecord = Record({
    id: null,
    date: null,
    title: '',
    text: '',
    comments: []
})

const ReducerState = Record({
    entities: arrToMap([]),
    loading: false,
    loaded: false
})

export default (articleState = new ReducerState, action) => {
    const {type, payload, response, randomId} = action

    switch (type) {
        case DELETE_ARTICLE:
            return articleState.deleteIn(['entities', payload.id])

        case ADD_COMMENT:
            return articleState
                .updateIn(['entities', payload.articleId, 'comments'], (comments) => comments.concat(randomId))

        case LOAD_ALL_ARTICLES + START:
            return articleState.set('loading', true)

        case LOAD_ALL_ARTICLES + SUCCESS:
            return articleState
                .set('entities', arrToMap(response, ArticleRecord))
                .set('loading', false)
                .set('loaded', true)
    }
    return articleState
}