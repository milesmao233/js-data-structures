class Node {
    constructor(element, next) {
        this.element = element
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.count = 0
        this.head = undefined
    }

    setupListFromArray(arr) {
        this.head = new Node(arr.shift())
        let current = this.head
        arr.forEach(item => {
            current.next = new Node(item)
            current = current.next
        })
        return this.head
    }

    push(element) {
        const node = new Node(element)
        let current
        if (this.head == null) {
            this.head = node
        } else {
            current = this.head
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

        let node = this.head
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
            const current = this.head
            node.next = current
            this.head = node
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

        let current = this.head
        if (index === 0) {
            this.head = current.next
        } else {
            const previous = this.getElementAt(index - 1)
            current = previous.next
            previous.next = current.next
        }
        this.count--
        return current.element
    }

    indexOf(element) {
        let current = this.head
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
    getHead() {
        return this.head
    }
    clear() {
        this.head = undefined
        this.count = 0
    }
    toString() {
        if (this.head == null) {
            return ''
        }
        let objString = `${this.head.element}`
        let current = this.head.next
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString},${current.element}`
            current = current.next
        }
        return objString
    }
}

export default LinkedList
