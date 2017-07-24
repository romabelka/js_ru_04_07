import {MYINCREMENT} from '../constants'

export default (mycounterState = 0, action) => {
    switch (action.type) {
        case MYINCREMENT:
			console.log(1000)
            return mycounterState + 1000
    }

    return mycounterState
}