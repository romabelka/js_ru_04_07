import { Map, OrderedMap, List} from 'immutable'

export function arrToMap(arr, RecordScheme = Map) {
    return arr.reduce((acc, entity) => acc.set(entity.id, new RecordScheme(entity)), new OrderedMap({}))
}

export function mapToArr(obj) {
        return obj.valueSeq().toArray()
}

export function idToMap(pageId, records) {
    let ids = records.map(rec => rec.id)
    return  new Map({ [pageId]: ids })
}

export function getNumberOfPages(total, limit) {
    if (!isFinite(total)) return 0
    if (limit === 0) return 1

    return Math.ceil(Number(total) / limit)
}