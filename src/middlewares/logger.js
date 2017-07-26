export default store => next => action => {
    console.log('---', action)
    console.log('--- state before', store.getState())
    next(action)
    console.log('--- state after', store.getState())
}