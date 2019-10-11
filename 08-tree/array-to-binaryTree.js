import { Node } from './utils'

class BinaryTree {
    // 构造二叉树
    constructor(data) {
        // 临时存储所有节点，方便寻找父子节点
        let nodeList = []
        // 顶节点
        let root
        for (let i = 0, len = data.length; i < len; i++) {
            let node = new Node(data[i])
            nodeList.push(node)
            if (i > 0) {
                // 属于哪一层
                let n = Math.floor(Math.sqrt(i + 1))
                // 计算当前层的起始索引
                let q = Math.pow(2, n) - 1
                // 计算上一层的起始索引
                let p = Math.pow(2, n - 1) - 1
                // 计算父节点的索引
                let parentIndex = p + Math.floor((i - q) / 2)
                let parent = nodeList[parentIndex]

                // 将当前节点和上一层的父节点做关联
                if (parent.left) {
                    parent.right = node
                } else {
                    parent.left = node
                }
            }
        }
        root = nodeList.shift()
        nodeList.length = 0
        return root
    }
}

export default BinaryTree
