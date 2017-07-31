import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import addComment from '../middlewares/addComment'

const enhancer = applyMiddleware(logger, addComment)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store
