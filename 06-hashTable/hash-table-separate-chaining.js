import { ValuePair } from './utils'
import { LinkedList } from '../03-linkedList/singly-linked-list'
import HashTable from './hashTable'

// hashtable 用链表解决冲突
class HashTableSeparateChaining extends HashTable {
    constructor() {
        super()
    }

    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key)
            if (this.table[position] == null) {
                this.table[position] = new LinkedList()
            }
            this.table[position].push(new ValuePair(key, value))
            return true
        }
        return false
    }

    get(key) {
        const position = this.hashCode(key)
        const linkedList = this.table[position]
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead()
            while (current != null) {
                if (current.element.key === key) {
                    return current.element.key
                }
                current = current.next
            }
        }
        return undefined
    }

    remove(key) {
        const position = this.hashCode(key)
        const linkedList = this.table[position]
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead()
            while (current != null) {
                if (current.element.key === key) {
                    linkedList.remove(current.element)
                    if (linkedList.isEmpty()) {
                        delete this.table[position]
                    }
                    return true
                }
                current = current.next
            }
        }
        return false
    }

    size() {
        let count = 0
        Object.values(this.table).forEach(linkedList => {
            count += linkedList.size()
        })
        return count
    }
}

export default HashTableSeparateChaining
