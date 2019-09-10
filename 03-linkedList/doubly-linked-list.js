const LinkedList = require('./singly-linked-list')

class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next)
        this.prev = prev
    }
}

class DoublyLinkedList extends LinkedList {
    constructor() {
        super()
        this.tail = undefined
    }

    /*
    push
    没有头结点，链表为空
        head 和 tal 指向 新建立的node
    有头结点，链表内有值
        尾结点的下一个是node
        node的上一个是尾结点
        尾结点设定为新建立的node
    */

    push(element) {
        const node = new DoublyNode(element)
        if (this.head == null) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.count++
    }

    /*
    insert 伪代码
    如果index 超出链表范围，返回undefined
    分为三种情况，index 0/最后/中间， 只有在index为0的时候，才用考虑链表为空。
    在第一个结点插入新元素
        链表为空
            head/tail 指向这个元素
        链表不为空（画图）
            current 设定为 head结点
            node.next = current
            current.prev = node
            head 指向 node
    最后一个结点插入(画图)
        current = tail
        current.next = node
        node.prev = current
        tail = node
    中间结点插入（画图）
        previous = getElementAt（index-1) 拿到前一个结点
        current = previous.next
        previous.next = node
        node.next = current
        node.prev = previous
        current.prev = node
    count++
    */

    insert(element, index) {
        if (index < 0 && index > this.count) {
            return false
        }

        const node = new DoublyNode(element)
        let current

        if (index === 0) {
            if (this.head == null) {
                this.head = node
                this.tail = node
            } else {
                current = this.head
                node.next = current
                current.prev = node
                this.head = node
            }
        } else if (index === this.count) {
            current = this.tail
            current.next = node
            node.prev = current
            this.tail = node
        } else {
            const previous = this.getElementAt(index - 1)
            current = previous.next
            previous.next = node
            node.next = current
            node.prev = previous
            current.prev = node
        }

        this.count++
        return true
    }

    /*
    removeAt 伪代码
    如果index 超出链表范围，返回undefined
    分为三种情况，index 0/最后/中间
    1. index = 0 头部
        head = current.next
        链表内原来只有一项
            移除后就没了，把tail 更新为undefined
        链表内原来多于一项
            移除头部后，把head.prev = undefined

    2. index = this.count - 1 尾部
        current = tail
        tail 指向 current 前一个节点
        tail.next = undefined

    3. index 中间
        current = getElementAt(index) 
        拿到current 前一个节点 和 后一个节点
        让前一个节点next 指向 后一个
        让后一个节点prev 指向 前一个节点
    */

    removeAt(index) {
        if (index < 0 && index > this.count) {
            return undefined
        }

        let current = this.head
        if (index === 0) {
            this.head = current.next
            if (this.count === 1) {
                this.tail = undefined
            } else {
                this.head.prev = undefined
            }
        } else if (index === this.count - 1) {
            current = this.tail
            this.tail = current.prev
            this.tail.next = undefined
        } else {
            current = this.getElementAt(index)
            let previous = current.prev
            let next = current.next
            previous.next = next
            next.prev = previous
        }
        this.count--
        return current.element
    }
}

export default DoublyLinkedList
