/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    let arr = [...gifts]

    for (let i = 0; i < k; i++) {
        let maxIndex = 0

        for (let j = 1; j < arr.length; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j
            }
        }

        arr[maxIndex] = Math.floor(Math.sqrt(arr[maxIndex]))
    }

    return arr.reduce((sum, val) => sum + val, 0)
};