import { ValuePairLazy } from './utils'
import HashTable from './hashTable'

// hashtable 用懒删除解决冲突

class HashTableLinearProbingLazy extends HashTable {
    constructor() {
        super()
    }

    /*
        思路： 
        如果为空或者isDeleted = true, 放在该位置
        不然，有值且isDeleted = false, 循环找到空的地方，放入
    */
    put(key, value) {
        if (key == null && value == null) {
            return false
        }

        const position = this.hashCode(key)
        if (
            this.table[position] == null ||
            (this.table[position] != null && this.table[position].isDeleted)
        ) {
            this.table[position] = new ValuePairLazy(key, value)
        } else {
            let index = position + 1
            while (this.table[index] != null && !this.table[position].isDeleted) {
                index++
            }
            this.table[index] = new ValuePairLazy(key, value)
        }
        return true
    }

    get(key) {
        const position = this.hashCode(key)
        // position 情况
        if (this.table[position] == null) {
            return undefined
        }

        if (this.table[position].key === key && !this.table[position].isDeleted) {
            return this.table[position].value
        }

        // index 情况
        let index = position + 1
        while (
            this.table[index] != null &&
            (this.table[index].key !== key || this.table[index].isDeleted)
        ) {
            if (this.table[index].key === key && this.table[index].isDeleted) {
                return undefined
            }
            index++
        }

        // while 的第一个条件不符合，跳出循环
        if (this.table[index] == null) {
            return undefined
        }

        // while 的第二个条件不符合，跳出循环
        if (
            this.table[index] != null &&
            this.table[index].key === key &&
            !this.table[index].isDeleted
        ) {
            return this.table[position].value
        }
    }

    remove(key) {
        const position = this.hashCode(key)
        // position 情况
        if (this.table[position] == null) {
            return false
        }

        if (this.table[position].key === key && !this.table[position].isDeleted) {
            this.table[position].isDeleted = true
            return true
        }

        // index 情况
        let index = position + 1
        while (
            this.table[index] != null &&
            (this.table[index].key !== key || this.table[index].isDeleted)
        ) {
            index++
        }

        if (this.table[index] == null) {
            return false
        }

        if (
            this.table[index] != null &&
            this.table[index].key === key &&
            !this.table[index].isDeleted
        ) {
            this.table[index].isDeleted = true
            return true
        }
    }

    size() {
        let count = 0
        Object.values(this.table).forEach(valuePair => {
            count += valuePair.isDeleted === true ? 0 : 1
        })
        return count
    }
}

export default HashTableLinearProbingLazy
