import {ADD_COMMENT} from '../constants';

export default store => next => action => {
    const id = new Date().getTime();
      
    if (action.type === ADD_COMMENT) {
        action.payload.id = id;
    }
    next(action)
}