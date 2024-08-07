function evalRPN(tokens: string[]): number {
    const stack: number[] = []

    tokens.forEach((token) => {
        if (!isNaN(Number(token))) {
            stack.push(Number(token))
        } else {
            const b = stack.pop()
            const a = stack.pop()

            switch (token) {
                case '+':
                    stack.push(a + b)
                    break
                case '-':
                    stack.push(a - b)
                    break
                case '*':
                    stack.push(a * b)
                    break
                case '/':
                    stack.push(a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b))
                    break
            }
        }
    })
    return stack.pop()
};