import {createSelector} from 'reselect'
import {mapToArr} from '../helpers'


export const articlesObjSelector = (state) => state.articles
export const commentsObjSelector = (state) => state.comments
export const filtersSelector = (state) => state.filters
export const idSelector = (state, props) => props.id

export const articlesSelector = createSelector(articlesObjSelector, mapToArr)
export const commentsSelector = createSelector(commentsObjSelector, mapToArr)

export const filteredArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters)  => {
    console.log('---', 'recomputing filtration')
    const {selected, dateRange: {from, to}} = filters

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})


export const commentsSelectorFactory = () => createSelector(articlesObjSelector, commentsSelector, idSelector, (articles, comments, articleId) => {
    const articleComments = articles[articleId].comments

    return  comments.filter(comment => {
       return (!articleComments || articleComments.includes(comment.id))
    })

})


export const commentSelectorFactory = () => createSelector(commentsObjSelector, idSelector, (comments, id) => {
    console.log('---', 'getting comment', id)
    return comments[id]
})

