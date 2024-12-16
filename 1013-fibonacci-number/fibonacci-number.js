/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const map = new Map()
    if (map.has(n)) return map.get(n)

    let result

    if (n < 2) {
        result = n
    } else {
        result = fib(n-1) + fib(n-2)
    }
    map.set(n, result)
    return result
};