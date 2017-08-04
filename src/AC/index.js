import {INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE, CHANGE_SELECTION, ADD_COMMENT,
    LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS, FAIL, LOAD_COMMENTS} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: { comment, articleId },
        generateId: true
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

/*
export function loadArticle(id) {
    return {
        type: LOAD_ARTICLE,
        payload: { id },
        callAPI: `/api/article/${id}`
    }
}*/

export function loadArticle(id) {
    return (dispatch, getState) => {
        const article = getState().articles.entities.get(id)
        if (article.text || article.loading) return

        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        })

        setTimeout(() => {
            fetch(`/api/article/${id}`)
                .then(res => res.json())
                .then(response => dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: { id },
                    response
                }))
        }, 1000)
    }
}

export function loadComments(articleId) {
    return (dispatch, getState) => {
        const articleComments = getState().articles.entities.get(articleId).comments
        const loadedComments = getState().comments

        if (loadedComments.loading) return
        if (articleComments.every(
            (id) => loadedComments.entities.has(id) && loadedComments.entities.get(id).text)
        ) return

        dispatch({
            type: LOAD_COMMENTS + START,
            payload: {articleId}
        })

        setTimeout(()=>{
           fetch(`/api/comment?article=${articleId}`)
               .then(response => response.json())
               .then(response => dispatch({
                   type: LOAD_COMMENTS + SUCCESS,
                   payload: { articleId },
                   response
               }))
               .catch(error => dispatch({
                   type: LOAD_COMMENTS + FAIL,
                   payload: {articleId},
                   error
               }))
        }, 1000)
    }
}