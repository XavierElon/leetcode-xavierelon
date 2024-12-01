/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0) return true
    if (s.length % 2 !== 0) return false
    
    const stack = []

    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char)
        } else {
            console.log(stack)
            const top = stack.pop()
            if (char === ')' && top !== '(') return false
            if (char === '}' && top !== '{') return false
            if (char === ']' && top !== '[') return false
        }
    }

    return stack.length === 0
};