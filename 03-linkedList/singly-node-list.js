// 单链表，参数是array 可以直接生成链表

class Node {
    constructor(value) {
        this.val = value
        this.next = undefined
    }
}

class NodeList {
    constructor(arr) {
        // 声明链表的头部节点
        let head = new Node(arr.shift())
        let current = head
        arr.forEach(item => {
            current.next = new Node(item)
            current = current.next
        })
        return head // 在constructor return 的话，新建实例就是 return 返回值 head
    }
}

export default NodeList
