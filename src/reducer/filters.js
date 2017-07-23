import {FILTER_ALL, FILTER_APRIL, FILTER_MAY, FILTER_JUNE, SET_FILTER} from '../constants'

export default (filterState = 'FILTER_ALL', action) => {
    const {type, payload} = action

    switch (type) {
        case SET_FILTER:
            switch (payload.filterType) {
                case 'FILTER_ALL':
                    return 'FILTER_ALL';
                case 'FILTER_APRIL':
                    return 'FILTER_APRIL';
                case 'FILTER_MAY':
                    return 'FILTER_MAY';
                case 'FILTER_JUNE':
                    return 'FILTER_JUNE';

            }
    }

    return filterState
}