import {combineReducers} from 'redux'
import counterReducer from './counter'
import mycounterReducer from './mycounter'
import articles from './articles'
import selectReducer from './select'
import dateRangeReducer from './dateRange'

export default combineReducers({
    count: counterReducer,
	mycount: mycounterReducer,
    articles,
	selected: selectReducer,
	dateRange: dateRangeReducer
})