import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducer'
import logger from '../middlewares/logger'
import generateId from '../middlewares/generateId'

const enhancer = applyMiddleware(logger, generateId)

const store = createStore(reducer, {}, composeWithDevTools(enhancer))

//dev only
window.store = store

export default store