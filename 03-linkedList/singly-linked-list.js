class Node {
    constructor(element, next) {
        this.element = element
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.count = 0
        this._head = undefined
    }

    get head() {
        return this._head
    }

    set head(value) {
        return (this._head = value)
    }

    setupListFromArray(arr) {
        this._head = new Node(arr.shift())
        let current = this._head
        arr.forEach(item => {
            current.next = new Node(item)
            current = current.next
        })
        this.count = arr.length + 1
        return this
    }

    push(element) {
        const node = new Node(element)
        let current
        if (this._head == null) {
            this._head = node
        } else {
            current = this._head
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }

    getElementAt(index) {
        if (index < 0 && index > this.count) {
            return undefined
        }

        let node = this._head
        for (let i = 0; i < index && node != null; i++) {
            node = node.next
        }
        return node
    }

    insert(element, index) {
        if (index < 0 && index > this.count) {
            return false
        }

        const node = new Node(element)
        if (index === 0) {
            const current = this._head
            node.next = current
            this._head = node
        } else {
            const previous = this.getElementAt(index - 1)
            node.next = previous.next
            previous.next = node
        }
        this.count++
        return true
    }

    removeAt(index) {
        if (index < 0 && index > this.count) {
            return undefined
        }

        let current = this._head
        if (index === 0) {
            this._head = current.next
        } else {
            const previous = this.getElementAt(index - 1)
            current = previous.next
            previous.next = current.next
        }
        this.count--
        return current.element
    }

    indexOf(element) {
        let current = this._head
        for (let i = 0; i < this.size() && current != null; i++) {
            if (element === current.element) {
                return i
            }
            current = current.next
        }
        return -1
    }

    remove(element) {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.count
    }

    clear() {
        this._head = undefined
        this.count = 0
    }

    toArray() {
        let arr = []
        let current = this._head
        while (current) {
            arr.push(current.element)
            current = current.next
        }
        return arr
    }

    toString() {
        if (this._head == null) {
            return ''
        }
        let objString = `${this._head.element}`
        let current = this._head.next
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString},${current.element}`
            current = current.next
        }
        return objString
    }

    reverseList() {
        let prev = null
        let current = this._head

        while (current != null) {
            let nextTemp = current.next
            current.next = prev
            prev = current
            current = nextTemp
        }
        this._head = prev
        return this
    }

    checkCircle() {
        let fast = this._head.next
        let slow = this._head
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next
            slow = slow.next
            if (slow === fast) return true
        }
        return false
    }

    // 求中间节点
    findMiddleNode() {
        let fast = this._head
        let slow = this._head
        while (fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next
            slow = slow.next
        }
        return slow
    }

    // 删除倒数第k个节点
    removeByIndexFromEnd(index) {
        //务必先判断是否是 环链表
        if (this.checkCircle()) return false
        this.reverseList()
        this.removeAt(index)
        this.reverseList()
    }
}

export default LinkedList
