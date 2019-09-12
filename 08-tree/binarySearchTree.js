import { Node, Compare, defaultCompare } from './utils'

class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn
        this.root = null
    }

    insert(key) {
        if (this.root === null) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }

    /* 
    非空树，插入思路： 
        key 和 node.key比较
            小于就是在左边（可能是子孙中的某一个, 子孙也会判断在左还是右）
            大于就是在右边（可能是子孙中的某一个, 子孙也会判断在左还是右）
    */
    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new Node(key)
            } else {
                this.insertNode(node.left, key)
            }
        } else {
            if (node.right == null) {
                node.right = new Node(key)
            } else {
                this.insertNode(node.right, key)
            }
        }
    }

    /*
    中序遍历 
        以最小到最大的顺序访问所有节点
    */
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback)
    }

    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right, callback)
        }
    }

    /*
    先序遍历 
        以优先于后代节点的顺序访问每个节点。
    */
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback)
    }

    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.key)
            this.preOrderTraverseNode(this.left, callback)
            this.preOrderTraverseNode(this.right, callback)
        }
    }

    /*
    后序遍历 
        先访问节点的后代节点，再访问节点本身
    */
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback)
    }

    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(this.left, callback)
            this.postOrderTraverseNode(this.right, callback)
            callback(node.key)
        }
    }

    /*
    搜索最小最大值
        最小值： 最左边
        最大值： 最右边
    */
    min() {
        return this.minNode(this.root)
    }

    minNode(node) {
        let current = node
        if (current == null) {
            return current // 根节点
        }
        while (current.left != null) {
            current = current.left
        }
        return current
    }

    max() {
        return this.maxNode(this.root)
    }

    maxNode(node) {
        let current = node
        if (current == null) {
            return current
        }
        while (current.right != null) {
            current = current.right
        }
        return current
    }

    /*
        搜索特定值是否存在
    */
    search(key) {
        return this.searchNode(this.root, key)
    }

    searchNode(node, key) {
        if (node == null) {
            return false
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key)
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key)
        } else {
            return true
        }
    }

    /*
        移除一个节点
    */
    remove(key) {
        this.root = this.removeNode(this.root, key)
    }

    removeNode(node, key) {
        if (node == null) {
            return null
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key)
            return node
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key)
            return node
        } else {
            // key 等于 node.key
            // 1. 左右都没有节点，删除这个节点
            if (node.left == null && node.right == null) {
                node = null
                return node
            }

            // 2. 左或右有一个子节点，
            //    这样将返回的指向跳过它，return 回去父节点就会指向node.right/left
            if (node.left == null) {
                node = node.right
                return node
            } else if (node.right == null) {
                node = node.left
                return node
            }

            /*3. 移除有两个子节点的节点
                    找到右侧节点中的最小节点
                    更新这个节点为最小节点的key
                    移除最小节点
                    返回 node
            */

            const aux = this.minNode(node.right)
            node.key = aux.key
            node.right = this.removeNode(node.right, aux.key)
            return node
        }
    }
}

export default BinarySearchTree
