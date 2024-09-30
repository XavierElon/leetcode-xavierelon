class MyQueue {
    private input: number[]
    private output: number[]

    constructor() {
        this.input = []
        this.output = []    
    }

    push(x: number): void {
        this.input.push(x)
    }

    pop(): number {
        if (this.output.length === 0) {
            while (this.input.length > 0) {
                this.output.push(this.input.pop())
            }
        }
        return this.output.pop()
    }

    peek(): number {
        if (this.output.length === 0) {
            while(this.input.length > 0) {
                this.output.push(this.input.pop())
            }
        }

        return this.output[this.output.length - 1]
    }

    empty(): boolean {
        return !this.input.length && !this.output.length
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