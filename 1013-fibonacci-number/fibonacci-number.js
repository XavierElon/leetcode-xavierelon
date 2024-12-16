/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const memo = new Map()

    function helper(num) {
        if (memo.has(num)) return memo.get(num)
        let result

        if (num < 2) {
            result = num
        } else {
            result = helper(num - 1) + helper(num - 2)
        }
        memo.set(num, result)

        return result
    }
    return helper(n)
};