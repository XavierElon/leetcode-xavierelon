/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    let arr = [...gifts]

    for (let i = 0; i < k; i++) {
        arr.sort((a, b) => b - a)
        arr[0] = Math.floor(Math.sqrt(arr[0]))
    }

    return arr.reduce((sum, val) => sum + val, 0)
};