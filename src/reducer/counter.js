import {INCREMENT} from '../constants'

export default (counterState = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return counterState + 1
    }

    return counterState
}