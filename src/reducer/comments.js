import { ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS } from '../constants'
import { arrToMap } from '../helpers'
import {Map} from 'immutable'
import {Record} from 'immutable'

const CommentRecord = Record({
  id: null,
  user: '',
  text: ''
})

const ReducerState = Record({
  entities: arrToMap([]),
  loading: false,
  loaded: false
})


export default (commentState = new ReducerState, action) => {
  const { type, payload, response, randomId } = action

  switch (type) {
        case ADD_COMMENT:
            return commentState.set(randomId, new Map(payload.comment))

        case LOAD_ALL_COMMENTS + START:
            return commentState.set('loading', true)

    case LOAD_ALL_COMMENTS + SUCCESS:
            return commentState
                    .set('entities',arrToMap(response, CommentRecord))
                    .set('loading', false)
                    .set('loaded', true)


  }

  return commentState
}