/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let combinations = []

    const backtrack = (start, path) => {
        if (path.length === k) {
            combinations.push([...path])
            return
        }

        for (let i = start; i <= n; i++) {
            path.push(i)
            backtrack(i + 1, path)
            path.pop()
        }
    }

    backtrack(1, [])

    return combinations
};