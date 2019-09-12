import BinarySearchTree from './binarySearchTree'
import { RedBlackNode, Compare, Colors } from './utils'

class RedBlackTree extends BinarySearchTree {
    constructor() {
        super()
    }

    /**
     * Left left case: rotate right
     *
     *       b                           a
     *      / \                         / \
     *     a   e -> rotationLL(b) ->   c   b
     *    / \                             / \
     *   c   d                           d   e
     *
     * @param node Node<T>
     */
    rotationLL(node) {
        const tmp = node.left
        node.left = tmp.right
        if (tmp.right && tmp.right.key) {
            tmp.right.parent = node
        }
        tmp.parent = node.parent
        if (!node.parent) {
            this.root = tmp
        } else {
            if (node === node.parent.left) {
                node.parent.left = tmp
            } else {
                node.parent.right = tmp
            }
        }
        tmp.right = node
        node.parent = tmp
    }

    /**
     * Right right case: rotate left
     *
     *     a                              b
     *    / \                            / \
     *   c   b   -> rotationRR(a) ->    a   e
     *      / \                        / \
     *     d   e                      c   d
     *
     * @param node Node<T>
     */
    rotationRR(node) {
        const tmp = node.right
        node.right = tmp.left
        if (tmp.left && tmp.left.key) {
            tmp.left.parent = node
        }
        tmp.parent = node.parent
        if (!node.parent) {
            this.root = tmp
        } else {
            if (node === node.parent.left) {
                node.parent.left = tmp
            } else {
                node.parent.right = tmp
            }
        }
        tmp.left = node
        node.parent = tmp
    }

    insert(key) {
        if (this.root == null) {
            this.root = new RedBlackNode(key)
            this.root.color = Colors.BLACK
        } else {
            const newNode = this.insertNode(this.root, key)
            this.fixTreeProperties(newNode)
        }
    }

    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new RedBlackNode(key)
                node.left.parent = node
                return node.left
            } else {
                return this.insertNode(node.left, key)
            }
        } else if (node.right == null) {
            node.right = new RedBlackNode(key)
            node.right.parent = node
            return node.right
        } else {
            return this.insertNode(node.right, key)
        }
    }

    fixTreeProperties(node) {
        while (node && node.parent && node.parent.color.isRed() && node.color !== Colors.BLACK) {
            let parent = node.parent
            const grandParent = parent.parent

            // A： 父节点是左侧子节点
            if (grandParent && grandParent.left === parent) {
                const uncle = grandParent.right
                // 情形A1：叔节点也是红色---只需要重新填色
                if (uncle && uncle.color === Color.RED) {
                    grandParent.color = Colors.RED
                    parent.color = Colors.BLACK
                    uncle.color = Colors.BLACK
                    node = grandParent
                } else {
                    // 情形A2：节点是右侧子节点--左旋转
                    if (node === parent.right) {
                        this.rotationRR(parent)
                        node = parent
                        parent = node.parent
                    }
                    // 情形A3：节点是左侧子节点--右旋转
                    this.rotationLL(grandParent)
                    // swap color
                    parent.color = Colors.BLACK
                    grandParent.color = Colors.RED
                    node = parent
                }
            } else {
                // 情形B： 父节点是右侧子节点

                const uncle = grandParent.left

                // 情形B1: 叔节点是红色 --- 只需要重新填色
                if (uncle && uncle.color === Colors.RED) {
                    grandParent.color = Colors.RED
                    parent.color = Colors.BLACK
                    uncle.color = Colors.BLACK
                    node = grandParent
                } else {
                    // 情形B2: 节点是左侧子节点 --- 右旋转
                    if (node === parent.left) {
                        this.rotationLL(parent)
                        node = parent
                        parent = node.parent
                    }

                    // 情形B3： 节点是右侧子节点 --- 左旋转
                    this.rotationRR(grandParent)
                    // swap color
                    parent.color = Colors.BLACK
                    grandParent.color = Colors.RED
                    node = parent
                }
            }
        }
        this.root.color = Colors.BLACK
    }

    getRoot() {
        return this.root
    }
}

export default RedBlackTree
