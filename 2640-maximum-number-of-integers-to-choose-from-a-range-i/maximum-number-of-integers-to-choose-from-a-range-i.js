/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    banned.sort((a, b) => a - b)

    let count = 0
    let sum = 0

    const binarySearch = (target) => {
        let left = 0
        let right = banned.length - 1

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)

            if (banned[mid] === target) return true
            if (banned[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return false
    }

    for (let i = 1; i <= n; i++) {
        if (!binarySearch(i)) {
            sum += i
            if (sum > maxSum) break
            count++
        }
    }

    return count
};