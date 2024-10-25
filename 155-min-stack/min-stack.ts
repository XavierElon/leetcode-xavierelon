class MinStack {
    private mainStack: number[]
    private minStack: number[]

    constructor() {
        this.mainStack = []
        this.minStack = []
    }

    push(val: number): void {
        this.mainStack.push(val)

        if (this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val)
        }
    }

    pop(): void {
        if (this.mainStack.length === 0) {
            throw new Error('Stack is empty')
        }

        const popped = this.mainStack.pop()
        if (popped === this.getMin()) {
            this.minStack.pop()
        }
    }

    top(): number {
        if (this.mainStack.length === 0) {
            throw new Error('Stack is empty')
        }
        return this.mainStack[this.mainStack.length - 1]
    }

    getMin(): number {
        if (this.minStack.length === 0) {
            throw new Error('Stack is empty')
        }
        return this.minStack[this.minStack.length - 1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */