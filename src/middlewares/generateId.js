import uuid from 'uuid'
import {ADD_COMMENT} from '../constants'

export default store => next => action => {

    if (action.type == 'ADD_COMMENT')
    {
        const {comments} = store.getState();
        let newId = uuid();
        while(comments[newId])
        {
            newId = uuid();
        }
        action.payload.comment.id = newId;
    }

    next(action)
}