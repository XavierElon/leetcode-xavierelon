function evalRPN(tokens: string[]): number {
    const stack: number[] = []
    const operators = new Set(['+', '-', '*', '/'])

    for (const token of tokens) {
        if (!operators.has(token)) {
            stack.push(parseInt(token, 10))
        } else {
            const b = stack.pop()
            const a = stack.pop()

            if (a === undefined || b === undefined) {
                throw new Error("Invalid Exprssion")
            }

            let result: number

            switch (token) {
                case '+':
                    result = a + b
                    break
                case '-':
                    result = a - b
                    break
                case '*':
                    result = a * b
                    break
                case '/':
                    result = Math.trunc(a / b)
                    break
                default: throw new Error('Unknown operator: ${token}')
            }

            stack.push(result)
        }
    }

    if (stack.length !== 1) {
        throw new Error('Invalid Expression')
    }

    return stack[0]
};