// 广度优先搜索算法BFS

import Queue from '../02-queue/queue'

const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2,
}

const initializeColor = vertices => {
    const color = {}
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE
    }
    return color
}

/* 
    思路：从v开始广度优先搜索算法
        创建一个队列Q
        标注v为被发现的（灰色）并将v入队列Q
        将u所有未被访问过的邻点（白色）入队列
        标注u为已被探索的（黑色）
*/

const breadthFirstSearch = (graph, startVertex, callback) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initializeColor(vertices)
    const queue = new Queue()
    queue.enqueue(startVertex)

    while (!queue.isEmpty()) {
        const u = queue.dequeue()
        const neighbors = adjList.get(u)
        color[u] = Colors.GREY
        for (let i = 0; i < neighbors.length; i++) {
            const w = neightbors[i]
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY
                queue.enqueue(w)
            }
        }
        color[u] = Colors.BLACK
        if (callback) {
            callback(u)
        }
    }
}

const BFC = (graph, startVertex) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initializeColor(vertices)
    const queue = new Queue()
    const distances = {}
    const predecessors = {}
    queue.enqueue(startVertex)

    for (let i = 0; i < vertices.length; i++) {
        distances[vertices[i]] = 0
        predecessors[vertices[i]] = null
    }

    while (!queue.isEmpty()) {
        const u = queue.dequeue()
        const neighbors = adjList.get(u)
        color[u] = Colors.GREY
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i]
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY
                distances[w] = distances[u] + 1
                predecessors[w] = u
                queue.enqueue(w)
            }
        }
        color[u] = Colors.BLACK
    }

    return {
        distances,
        predecessors,
    }
}
