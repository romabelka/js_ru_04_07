import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancer = applyMiddleware(thunk, randomId, api, logger)

const store = createStore(reducer, {}, composeWithDevTools(enhancer));

//dev only
window.store = store

export default store