import {FILTER_SELECT} from '../constants'

export default (selected = [], action) => {
	const {type} = action

	switch (type) {
		case (FILTER_SELECT): return action.payload.selected
	}

	return selected
}