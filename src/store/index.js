import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import idCreator from '../middlewares/idCreator'

const enhancer = applyMiddleware(logger, idCreator)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store