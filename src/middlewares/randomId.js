export default store => next => action => { 
	
	if (!action.getId) return next(action)
    next({
        ...action,
        commentId: Math.random().toString(36)
    })
}