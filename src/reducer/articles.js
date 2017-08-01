import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES} from '../constants'
import {arrToMap} from '../helpers'
import {Record} from 'immutable'

const ArticleRecord = Record({
    id: null,
    date: null,
    title: '',
    text: '',
    comments: []
})

export default (articleState = arrToMap([]), action) => {
    const {type, payload, response, randomId} = action

    switch (type) {
        case DELETE_ARTICLE:
            return articleState.delete(payload.id)

        case ADD_COMMENT:
            return articleState
                .updateIn([payload.articleId, 'comments'], (comments) => comments.concat(randomId))

        case LOAD_ALL_ARTICLES:
            return arrToMap(response, ArticleRecord)
    }
    return articleState
}