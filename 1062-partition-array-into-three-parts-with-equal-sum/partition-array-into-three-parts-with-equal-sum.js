/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    const totalSum = arr.reduce((acc, num) => acc + num, 0)

    if (totalSum % 3 !== 0) return false
    const targetSum = totalSum / 3

    let currentSum = 0
    let partitionsFound = 0

    for (let i = 0; i < arr.length - 1; i++) {
        currentSum += arr[i]
        if (currentSum === targetSum) {
            currentSum = 0
            partitionsFound++
            if (partitionsFound === 2) {
                return true
            }
        }
    }
    return false
};