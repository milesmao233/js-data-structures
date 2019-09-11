function defaultToString(item) {
    if (item === null) {
        return 'NULL'
    } else if (item === undefined) {
        return 'UNDEFINED'
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`
    }
    return item.toString()
}

class ValuePair {
    constructor(key, value) {
        this.key = key
        this.value = value
    }

    toString() {
        return `[#${this.key}: ${this.value}]`
    }
}

class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.table = {}
    }

    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key)
            this.table[tableKey] = new ValuePair(key, value)
            return true
        }
        return false
    }

    hasKey(key) {
        return this.table[this.toStrFn(key)] != null
    }

    get(key) {
        const valuePair = this.table[this.toStrFn(key)]
        return valuePair == null ? undefined : valuePair.value
    }

    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)]
            return true
        }
        return false
    }

    keyValues() {
        // return Object.values(this.table)
        const valuePairs = []
        for (const k in this.table) {
            if (this.hasKey(k)) {
                valuePairs.push(this.table[k])
            }
        }
        return valuePairs
    }

    forEach(callbackFn) {
        const valuePairs = this.keyValues()
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
            if (result === false) {
                break
            }
        }
    }

    /*  keys()
        return array
    */
    keys() {
        return this.keyValues().map(valuePair => valuePair.key)
    }

    values() {
        return this.keyValues().map(valuePair => valuePair.value)
    }

    clear() {
        this.table = {}
    }

    size() {
        return Object.keys(this.table).length
    }

    isEmpty() {
        return this.size() === 0
    }
}

export default Dictionary
