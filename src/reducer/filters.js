const init = {
    dateRange: {
        from: null,
        to: null
    },
    filteredArticles: []
}

export default (state = init, action) => {
    const {type, payload} = action

    switch (type) {
        case 'FILTER_ARTICLE':
            return {
                ...state,
                filteredArticles: payload.filteredArticles
            }
        case 'FILTER_DATE':
            return {
                ...state,
                dateRange: payload.date
            }
    }
    return state
}