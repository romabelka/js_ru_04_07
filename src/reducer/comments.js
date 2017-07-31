import {normalizedComments as defaultComments} from '../fixtures'
import { arrToMap } from '../helpers'
import {ADD_COMMENT} from '../constants'
import logger from "../middlewares/logger";


export default (comments = arrToMap(defaultComments), action) => {
    const { type, payload } = action

    switch (type) {
      case ADD_COMMENT:
        const {user, text, id} = payload;
        return {...comments, [id]: {user, text, id}};
    }

    return comments
}

