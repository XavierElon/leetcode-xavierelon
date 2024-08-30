function longestValidParentheses(s: string): number {
    let maxLength: number = 0
    const stack: number[] = [-1]

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i)
        } else {
            stack.pop()

            if (stack.length === 0) {
                stack.push(i)
            } else {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1])
            }
        }
    }
    return maxLength
};