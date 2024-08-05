/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0) return true
    if (s.length % 2 !== 0) return false

    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '[' || s.charAt(i) === '(' || s.charAt(i) === '{') {
            stack.push(s.charAt(i))
        } else {
            if (stack.length === 0) return false
            const topChar = stack.pop()
            const c = s.charAt(i)

            if (c === ']' && topChar !== '[') return false
            if (c === ')' && topChar !== '(') return false
            if (c === '}' && topChar !== '{') return false

        }
    }
    return stack.length === 0

};

console.assert(isValid("") === true, "Empty string should be valid");
console.assert(isValid("()") === true, "Simple valid parentheses");
console.assert(isValid("()[]{}") === true, "Multiple types of valid brackets");
console.assert(isValid("([{}])") === true, "Nested valid brackets");
console.assert(isValid("(]") === false, "Invalid nested brackets");
console.assert(isValid("([)]") === false, "Invalid sequence of brackets");
console.assert(isValid("{[]}") === true, "Valid sequence of mixed brackets");
console.assert(isValid("}") === false, "Single closing bracket should be invalid");
console.assert(isValid("{[}") === false, "Incorrectly matched brackets should be invalid");
console.assert(isValid("(((((((((())))))))))") === true, "Long sequence of valid parentheses");

// Log to console if all tests pass
console.log("All tests passed!");