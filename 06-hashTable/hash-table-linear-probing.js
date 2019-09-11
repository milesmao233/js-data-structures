import { ValuePair } from './utils'
import HashTable from './hashTable'

// hashtable 用线性探查，交换位置解决冲突

class HashTableLinearProbing extends HashTable {
    constructor() {
        super()
    }

    put(key, value) {
        if (key == null && value == null) {
            return false
        }
        const position = this.hashCode(key)
        if (this.table[position] == null) {
            this.table[position] = new ValuePair(key, value)
        } else {
            let index = position + 1
            while (this.table[index] != null) {
                index++
            }
            this.table[index] = new ValuePair(key, value)
        }
        return true
    }

    get(key) {
        const position = this.hashCode(key)
        if (this.table[position] == null) {
            return undefined
        }
        if (this.table[position].key === key) {
            return this.table[position].value
        }

        let index = position + 1
        while (this.table[index] != null && this.table[index].key !== key) {
            index++
        }
        if (this.table[index] == null) {
            return undefined
        }
        if (this.table[index] != null && this.table[index].key === key) {
            return this.table[position].value
        }
    }

    remove(key) {
        const position = this.hashCode(key)
        if (this.table[position] == null) {
            return false
        }
        if (this.table[position].key === key) {
            delete this.table[position]
            this.verifyRemoveSideEffect(key, position)
            return true
        }
        let index = position + 1
        while (this.table[index] != null && this.table[index].key !== key) {
            index++
        }
        if (this.table[index] == null) {
            return false
        }
        if (this.table[index] != null && this.table[index].key === key) {
            delete this.table[index]
            this.verifyRemoveSideEffect(key, index)
            return true
        }
    }

    /*
        思路：
        @params key: 删除的Key
        @params removedPosition: 删除key的散列值位置
        拿到删除Key的散列值
        循环。直到下一个是空
        循环过程中，拿到当前循环的散列值posHash
        如果，posHash小于或等于传进来key的散列值，进行交换
        继续循环，之后依靠removedPosition，posHash小于或等于removedPosition，进行交换
    */
    verifyRemoveSideEffect(key, removedPosition) {
        const hash = this.hashCode(key)
        let index = removedPosition + 1
        while (this.table[index] != null) {
            const posHash = this.hashCode(this.table[index].key)
            if (posHash <= hash || posHash <= removedPosition) {
                this.table[removedPosition] = this.table[index]
                delete this.table[index]
                removedPosition = index
            }
            index++
        }
    }

    size() {
        return Object.keys(this.table).length
    }
}

export default HashTableLinearProbing
