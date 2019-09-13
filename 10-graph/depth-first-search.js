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
    深度优先搜索算法--思路：
        会从第一个指定的顶点开始遍历图，沿着路径直到这条路径最后一个顶点被访问了，接着原路回退并探索下一条路径
        若图中顶点v未访问，则访问该顶点v
        1.标注v为被发现的（灰色）
        2.对于v的所有未访问（白色）的邻点w，访问顶点w
        3.标注v为已被探索的（黑色）
*/

const depthFirstSearch = (graph, callback) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initializeColor(vertices)

    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            depthFirstSearchVisit(vertices[i], color, adjList, callback)
        }
    }
}

const depthFirstSearchVisit = (u, color, adjList, callback) => {
    color[u] = Colors.GREY
    if (callback) {
        callback(u)
    }
    const neighbors = adjList.get(u)
    for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i]
        if (color[w] === Colors.WHITE) {
            depthFirstSearchVisit(w, color, adjList, callback)
        }
    }
    color[u] = Colors.BLACK
}
