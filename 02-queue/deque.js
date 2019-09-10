// 双端队列

class Deque {
    constructor() {
        super()
    }

    addFront(element) {
        // 判断队列是否为空
        if (this.isEmpty()) {
            this.addBack(element)
        }
        // 不为空，最小count移动过
        else if (this.lowestCount > 0) {
            this.lowestCount--
            this.items[this.lowestCount] = element
        }
        // 不为空，最小count没有移动过
        else {
            // 从后往前遍历整个队列，向后移动一位
            // 10 = 9, 9 = 8
            // 如果从前往后遍历，那么要临时存下一个变量
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1]
            }
            this.count++
            this.items[0] = element
        }
    }

    addBack(element) {
        this.items[this.count] = element
        this.count++
    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    removeBack() {
        if (this.isEmpty()) {
            return undefined
        }

        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }

    peekFront() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }

    peekBack() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.count - 1]
    }

    isEmpty() {
        return this.size() === 0
    }

    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    size() {
        return this.count - this.lowestCount
    }

    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}

export default Deque
