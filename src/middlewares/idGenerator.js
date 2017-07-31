export default store => next => action => {
    if (action.type === 'ADD_COMMENT') {
        action.payload.commentId = Math.random().toString(16);
    }
    next(action);
}