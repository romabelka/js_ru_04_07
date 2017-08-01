import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'
import {arrToMap} from '../helpers'
import {Record} from 'immutable'

const ArticleRecord = Record({
    id: null,
    date: null,
    title: '',
    text: '',
    comments: []
})

export default (articleState = arrToMap(defaultArticles, ArticleRecord), action) => {
    const {type, payload, randomId} = action

    switch (type) {
        case DELETE_ARTICLE:
            return articleState.delete(payload.id)

        case ADD_COMMENT:
            return articleState
                .updateIn([payload.articleId, 'comments'], (comments) => comments.concat(randomId))
    }
    return articleState
}