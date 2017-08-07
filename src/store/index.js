/**
 * Created by oem on 7/24/17.
 */
import { createStore } from 'redux'
import reducer from '../reducer/index'

const store = createStore(reducer);

window.store = store;

export default store