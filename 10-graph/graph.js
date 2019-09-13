import Dictionary from '../05-dictionary/dictionary'

class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected
        this.vertices = []
        this.adjList = new Dictionary()
    }

    // 向图中添加一个新的顶点
    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v)
            this.adjList.set(v, [])
        }
    }

    // 添加顶点之间的边
    // 如果v,w不存在于图中，要将它们加入顶点列表
    // 添加v到w的边，和w到v的边
    addEdge(v, w) {
        if (!this.adjList.get(v)) {
            this.addVertex(v)
        }
        if (!this.adjList.get(w)) {
            this.addVertex(w)
        }
        this.adjList.get(v).push(w)
        if (!this.isDirected) {
            this.adjList.get(w).push(v)
        }
    }

    getVertices() {
        return this.vertices
    }

    getAdjList() {
        return this.adjList
    }

    toString() {
        let s = ''
        for (let i = 0; i < this.vertices.length; i++) {
            s += `${this.vertices[i]} -> `
            const neighbors = this.adjList.get(this.vertices[i])
            for (let j = 0; j < neighbors.length; j++) {
                s += `${neighbors[j]} `
            }
            s += '\n'
        }
        return s
    }
}
