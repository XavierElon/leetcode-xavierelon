/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    const totalSum = arr.reduce((acc, num) => acc + num, 0)

    if (totalSum % 3 !== 0) return false

    const targetSum = totalSum / 3
    let partitions = 0
    let currentSum = 0

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i]
        if (currentSum === targetSum) {
            partitions++
            currentSum = 0
            if (partitions === 3) return true
        }
    }

    return false
};