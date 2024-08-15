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
                    stack.push(a / b > 0 ? Math.floor(a / b ) : Math.ceil(a / b))
            }
        }
    })
    return stack.pop()
};