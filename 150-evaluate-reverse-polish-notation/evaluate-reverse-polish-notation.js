/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []

    tokens.forEach((token) => {
        if (!isNaN(token)) {
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
                    stack.push(Math.trunc(a / b))
                    break
            }
        }
    })
    return stack.pop()

    
};