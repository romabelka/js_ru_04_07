import {INCREMENT} from '../constants'
import {DECREMENT} from '../constants'
import {DELETE_ARTICLE} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}
