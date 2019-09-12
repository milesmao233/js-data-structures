import BinarySearchTree from './binarySearchTree'
import { Compare } from './utils'

const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5,
}

class AVLTree extends BinarySearchTree {
    constructor() {
        super()
    }

    getNodeHeight(node) {
        if (node == null) {
            return -1
        }
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1
    }

    /**
     * Left left case: rotate right
     *  左侧节点高度 大于 右侧节点高度
     *
     *       b                           a
     *      / \                         / \
     *     a   e -> rotationLL(b) ->   c   b
     *    / \                             / \
     *   c   d                           d   e
     *
     * @param node Node<T>
     *
     * b.left -> d
     * a.right -> b
     */
    rotationLL(node) {
        const tmp = node.left
        node.left = tmp.right
        tmp.right = node
        return tmp
    }

    /**
     * Right right case: rotate left
     * 右侧节点高度 大于 左侧节点高度
     *
     *     a                              b
     *    / \                            / \
     *   c   b   -> rotationRR(a) ->    a   e
     *      / \                        / \
     *     d   e                      c   d
     *
     * @param node Node<T>
     *
     * a.right -> d
     * b.left -> a
     */
    rotationRR(node) {
        const tmp = node.right
        node.right = tmp.left
        tmp.left = node
        return tmp
    }

    /**
     * Left right case: rotate left then right
     * 左侧子节点高度 大于 右侧子节点高度 并且 左侧子节点右侧较重
     *
     * @param node Node<T>
     */
    rotationLR(node) {
        node.left = this.rotationRR(node.left)
        return this.rotationLL(node)
    }

    /**
     * Right left case: rotate right then left
     * 右侧子节点高度 大于 左侧子节点高度 并且 右侧子节点左侧较重
     *
     * @param node Node<T>
     */
    rotationRL(node) {
        node.right = this.rotationLL(node.right)
        return this.rotationRR(node)
    }

    getBalanceFactor(node) {
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
        switch (heightDifference) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
            case 2:
                return BalanceFactor.UNBALANCED_LEFT
            default:
                return BalanceFactor.BALANCED
        }
    }

    insert(key) {
        this.root = this.insertNode(this.root, key)
    }

    insertNode(node, key) {
        if (node == null) {
            return new Node(key)
        } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key)
        } else if (this.compareFn(kye, node.key) === Compare.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key)
        } else {
            return node
        }

        // 如果需要，将树进行平衡操作
        const balanceFactor = this.getBalanceFactor(node)
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
                node = this.rotationLL(node)
            } else {
                return this.rotationLR(node)
            }
        }

        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
                node = this.rotationRR(node)
            } else {
                return this.rotationRL(node)
            }
        }
        return node
    }

    removeNode(node, key) {
        node = super.removeNode(node, key) // {1}
        if (node == null) {
            return node
        }
        // verify if tree is balanced
        const balanceFactor = this.getBalanceFactor(node)
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            // Left left case
            if (
                this.getBalanceFactor(node.left) === BalanceFactor.BALANCED ||
                this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
            ) {
                return this.rotationLL(node)
            }
            // Left right case
            if (this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                return this.rotationLR(node.left)
            }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            // Right right case
            if (
                this.getBalanceFactor(node.right) === BalanceFactor.BALANCED ||
                this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            ) {
                return this.rotationRR(node)
            }
            // Right left case
            if (this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                return this.rotationRL(node.right)
            }
        }
        return node
    }
}

export default AVLTree
