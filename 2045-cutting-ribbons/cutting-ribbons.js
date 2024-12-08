/**
 * @param {number[]} ribbons
 * @param {number} k
 * @return {number}
 */
var maxLength = function(ribbons, k) {
    const countPieces = (length) => {
        return ribbons.reduce((acc, curr) => acc + Math.floor(curr / length), 0)
    }

    let left = 1
    let right = Math.max(...ribbons)
    let result = 0

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (countPieces(mid) >= k) {
            result= mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return result
};