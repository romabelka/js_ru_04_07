export default store => next => action => {
    if (action.generateId){
        next({
            ...action,
            newId: Date.now() + "" + Math.round(Math.random()*100)
        })
    } else next(action)
}