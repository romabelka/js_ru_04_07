/**
 * Created by oem on 7/24/17.
 */
import {combineReducers} from "redux";
import counterReducer from './counter'
import articles from  './articles'

export default combineReducers({
    counterReducer,
    articles
})

