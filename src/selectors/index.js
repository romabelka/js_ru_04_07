import {createSelector} from 'reselect'
import {mapToArr} from '../helpers'

export const articlesObjSelector = (state) => state.articles.entities
export const commentsSelector = (state) => state.comments
export const filtersSelector = (state) => state.filters
export const idSelector = (state, props) => props.id

export const articlesSelector = createSelector(articlesObjSelector, mapToArr)

export const filteredArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters)  => {
    console.log('---', 'recomputing filtration')
    const {selected, dateRange: {from, to}} = filters

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})

export const commentSelectorFactory = () => createSelector(commentsSelector, idSelector, (comments, id) => {
    return comments.get(id)
})