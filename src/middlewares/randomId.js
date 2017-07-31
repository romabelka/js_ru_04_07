import {ADD_COMMENT} from '../constants'
export default store => next => action => {
  switch (action.type) {
    case ADD_COMMENT:
      action.payload.id = randWD(10);
  }
  next(action)
}

function randWD(n){  // [ 2 ] random words and digits
  return Math.random().toString(36).slice(2, 2 + Math.max(1, Math.min(n, 10)) );
}