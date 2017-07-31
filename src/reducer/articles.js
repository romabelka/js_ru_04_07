import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE} from '../constants'
import {ADD_COMMENT} from '../constants'
import {arrToMap} from '../helpers'
import {mapToArr} from '../helpers'

export default (articleState = defaultArticles, action) => {
    const {type, payload} = action
    const articles = mapToArr(articleState)
    switch (type) {
      case DELETE_ARTICLE:
            return arrToMap(articles.filter(article => article.id !== payload.id))

        case ADD_COMMENT:
            console.log('--- ', 'article add comment');
            const {id, articleId} = payload;

            return arrToMap(articles.map(article => {
                if(article.id === articleId) {
                    return {...article, ['comments']: [...article.comments, id]};
                } else {
                    return article
                }
            }));
    }
    return arrToMap(articleState)
}