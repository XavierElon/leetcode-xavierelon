class MyQueue {
    private input: number[]
    private output: number[]

    constructor() {
        this.input = []
        this.output = []     
    }

    push(x: number): void {
        while (this.output.length > 0) {
            this.input.push(this.output.pop())
        }

        this.input.push(x)

        while (this.input.length > 0) {
            this.output.push(this.input.pop())
        }
    }

    pop(): number {
        return this.output.pop()
    }

    peek(): number {
        return this.output[this.output.length - 1]
    }

    empty(): boolean {
        return this.output.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */