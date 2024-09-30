class MyStack {
    private queue1: number[]
    private queue2: number[]

    constructor() {
        this.queue1 = []
        this.queue2 = []   
    }

    push(x: number): void {
        this.queue2.push(x)

        while (this.queue1.length > 0) {
            this.queue2.push(this.queue1.shift())
        }

        [this.queue1, this.queue2] = [this.queue2, this.queue1]
    }

    pop(): number {
        if (this.empty()) {
            throw new Error('Stack is empty')
        }
        return this.queue1.shift()
    }

    top(): number {
        if (this.empty()) {
            throw new Error('Stack is empty')
        }

        return this.queue1[0]
    }

    empty(): boolean {
        return this.queue1.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */