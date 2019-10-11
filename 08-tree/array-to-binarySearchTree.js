import { Node } from './utils'

class BinarySearchTree {
    constructor(data) {
        let root = new Node(data.shift())
        data.forEach(item => {
            this.insertNode(root, item)
        })
        return root
    }

    insertNode(node, data) {
        if (node.val > data) {
            if (node.left == null) {
                node.left = new Node(data)
            } else {
                this.insertNode(node.left, data)
            }
        } else {
            if (node.right == null) {
                node.right = new Node(data)
            } else {
                this.insertNode(node.right, data)
            }
        }
    }
}

export default BinarySearchTree
