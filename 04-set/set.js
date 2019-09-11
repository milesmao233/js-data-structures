// 成员的值都是唯一的，没有重复

class Set {
    constructor() {
        this.items = {}
    }

    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element
            return true
        }
        return false
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element]
            return true
        }
        return false
    }

    size() {
        return Object.keys(this.items).length
    }

    values() {
        return Object.values(this.items)
    }

    // valuesLegacy() {
    //     let values = []
    //     for (let key in this.items) {
    //         if (this.items.hasOwnProperty(key)) {
    //             values.push(this.items[key])
    //         }
    //     }
    //     return values
    // }

    // 集合运算
    // 并集
    union(otherSet) {
        const unionSet = new Set()
        this.values().forEach(value => unionSet.add(value))
        otherSet.values().forEach(value => unionSet.add(value))
        return unionSet
    }

    // 交集
    intersection(otherSet) {
        const intersectionSet = new Set()

        const values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }

    // 差集
    difference(otherSet) {
        const differenceSet = new Set()
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                differenceSet.add(value)
            }
        })
        return differenceSet
    }

    // 子集
    isSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) {
            return false
        }
        let isSubset = true
        this.values().every(value => {
            if (!otherSet.has(value)) {
                isSubset = false
                return false
            }
            return true
        })
        return isSubset
    }
}
