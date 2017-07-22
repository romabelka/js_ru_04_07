import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(reducer, devToolsEnhancer());

//dev only
window.store = store

export default store