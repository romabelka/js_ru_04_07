export function arrToMap(arr) {
    return arr.reduce((acc, entity) => ({
        ...acc, [entity.id]: entity
    }), {})
}

export function mapToArr(obj) {
    return Object.keys(obj).map(id => obj[id])
}