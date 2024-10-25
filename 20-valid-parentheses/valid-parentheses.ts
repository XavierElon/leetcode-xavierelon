function isValid(s: string): boolean {
    if (s.length === 0) return true
    if (s.length % 2 !== 0) return false

    const stack: string[] = []

    for (const char of s) {
        if (char === '[' || char === '(' || char === '{') {
            stack.push(char)
        } else {
            const top: string = stack.pop()

            if (char === ']' && top !== '[') return false
            if (char === '}' && top !== '{') return false
            if (char === ')' && top !== '(') return false
        }
    }

    return stack.length === 0
};