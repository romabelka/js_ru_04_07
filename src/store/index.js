import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
//import logger from '../middlewares/logger'
import generateId from '../middlewares/generateId'

const enhancer = applyMiddleware(generateId)

const store = createStore(reducer, {}, enhancer)

export default store