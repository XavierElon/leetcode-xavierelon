/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    const n = values.length
    const maxValues = new Array(n).fill(0)

    maxValues[0] = values[0]
    for (let i = 1; i < n; i++) {
        maxValues[i] = Math.max(maxValues[i - 1], values[i] + i)
    }

    let maxScore = -Infinity
    for (let j = 1; j < n; j++) {
        maxScore = Math.max(maxScore, maxValues[j - 1] + values[j] - j)
    }

    return maxScore
};