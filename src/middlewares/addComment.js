import { ADD_COMMENT, ADD_COMMENT_TO_ARTICLE } from '../constants'


export default store => next => action => {
    if (action.type === ADD_COMMENT) {
      action.payload.comment['id'] = makeid()
      const articleId = action.payload.comment.articleId
      const commentId = action.payload.comment.id
      store.dispatch({ type: ADD_COMMENT_TO_ARTICLE, payload: { articleId: articleId, commentId: commentId } })
    }
    next(action)
}

function makeid() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
