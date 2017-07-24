

const init  = {
    dateRange: {
        from: null,
        to: null
    },
    selectedArticles: []
}

export default (state = init, action) => {
    const {type, payload} = action

    switch (type) {
        case 'CASE':
            return state
    }
    return state
}