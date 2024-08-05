/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0) return true
    if (s.length % 2 !== 0) return false

    const stack = []

    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i)
        if (c === '[' || c === '{' || c === '(') {
            stack.push(s.charAt(i))
        } else {
            const top = stack.pop()

            if (c === ']' && top !== '[') return false
            if (c === '}' && top !== '{') return false
            if (c === ')' && top !== '(') return false
        }
    }

    return stack.length === 0
};