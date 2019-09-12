export class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }

    toString() {
        return `${this.key}`
    }
}

export const Colors = {
    RED: 1,
    BLACK: 2,
}

export class RedBlackNode extends Node {
    constructor(key) {
        super(key)
        this.color = Colors.RED
        this.parent = null
    }

    isRed() {
        return this.color === Colors.RED
    }
}

export const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0,
}

export function defaultCompare(a, b) {
    if (a === b) {
        return Compare.EQUALS
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
