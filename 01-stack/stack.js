// First In Last Out

class Stack {
    constructor() {
        this.count = 0;
        this.items = {}; // 用对象存储
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    clear() {
        this.count = 0;
        this.items = {};
    }

    toArray() {
        return Array.prototype.slice.call(Object.values(this.items));
    }

    toString() {
        if (this.isEmpty()) {
            return "";
        }

        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}

export default Stack;
